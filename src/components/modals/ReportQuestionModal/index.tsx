import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import api from '@/services/api'
import { useRouter } from 'next/router'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import axios, { AxiosError } from 'axios'
import { Spinner } from '@/components/atoms/Spinner'
import { Heading } from '@/components/atoms/Heading'
import { IoMdClose } from 'react-icons/io'
import { useReportQuestionStore } from '@/features/stores/modals-stores/reportQuestionModal/userReportQuestionModal'

interface FormData {
  email: string
  password: string
}

const loginFormSchema = zod.object({
  email: zod.string().email('E-mail inválido'),
  password: zod.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export function ReportQuestionModal() {
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<FormData>({
      resolver: zodResolver(loginFormSchema),
    })

  const { setIsOpening } = useReportQuestionStore()

  const { login } = useAuthStore()

  const { isSubmitting } = formState

  const router = useRouter()

  const handleSignInModal = async (data: FormData) => {
    try {
      const existingToken = Cookies.get('questty-token')

      if (existingToken) {
        await router.push('/home')
        return
      }

      const { email, password } = data

      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token } = response.data

      Cookies.set('questty-token', token, {
        expires: 60 * 60 * 24 * 7, // 7 day
        path: '/',
      })

      const userResponse = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const user = userResponse.data.user

      login(user, token)
      setIsOpening(false)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        if (axiosError.response) {
          const responseData: any = axiosError.response.data
          setError(responseData.message)
        } else {
          console.error('Erro ao autenticar:', error)
          throw error
        }
      } else {
        console.error('Erro ao autenticar:', error)
        throw error
      }
    }
  }

  const handleCloseModal = () => {
    setIsOpening(false)
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.MainContainer>
          <S.CloseButtonContainer>
            <button onClick={handleCloseModal}>
              <IoMdClose size={28} />
            </button>
          </S.CloseButtonContainer>
          <S.LoginContainerContent>
            <S.EnterHeader>
              <Heading
                weight="bold"
                size="md"
                color="blue_950"
                style={{ marginBottom: '1rem' }}
              >
                Denunciar!
              </Heading>
            </S.EnterHeader>
            <S.SubHeader>
              <Text size="xs" style={{ fontSize: '15px' }}>
                Escolha a razão da denúncia:
              </Text>
            </S.SubHeader>
            <S.FormContainer onSubmit={handleSubmit(handleSignInModal)}>
              <Spinner size="lg" baseColor="black" variant="primary" />
            </S.FormContainer>
          </S.LoginContainerContent>
        </S.MainContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
