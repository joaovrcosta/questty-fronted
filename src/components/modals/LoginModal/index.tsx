import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { Input } from '@/components/atoms/Input'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import Cookies from 'js-cookie'
import axios, { AxiosError } from 'axios'
import { Spinner } from '@/components/atoms/Spinner'
import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { useAuthModalStore } from '@/features/stores/modals-stores/authModal/authModal'
import { IoMdClose } from 'react-icons/io'

interface FormData {
  email: string
  password: string
}

const loginFormSchema = zod.object({
  email: zod.string().email('E-mail inválido'),
  password: zod.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export function LoginModal() {
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<FormData>({
      resolver: zodResolver(loginFormSchema),
    })

  const { setIsOpening } = useAuthModalStore()
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
                style={{ marginBottom: '1rem', textAlign: 'center' }}
              >
                Olá novamente
              </Heading>
              <Text style={{ textAlign: 'center' }}>
                Receba respostas em minutos e termine a lição de casa mais
                rápido
              </Text>
            </S.EnterHeader>
            <S.FormContainer onSubmit={handleSubmit(handleSignInModal)}>
              <S.InputContainer>
                <S.EmailInputContainer>
                  <Input
                    {...register('email')}
                    placeholder="exemplo@exemplo.com"
                    variant="lg"
                    hug={true}
                    showLabel={true}
                    label="E-mail"
                    style={{ marginBottom: '0.5rem' }}
                    border={true}
                  />
                  {formState.errors.email && (
                    <span style={{ color: '#D20032' }}>
                      {formState.errors.email.message}
                    </span>
                  )}
                </S.EmailInputContainer>
                <Input
                  {...register('password')}
                  placeholder="Senha"
                  type="password"
                  variant="lg"
                  hug={true}
                  showLabel={true}
                  label="Senha"
                  style={{ marginBottom: '0.5rem' }}
                  border={true}
                />

                {formState.errors.password && (
                  <span style={{ color: '#D20032' }}>
                    {formState.errors.password.message}
                  </span>
                )}

                {error && (
                  <Text className="error" color="danger_500">
                    E-mail ou senha inválida
                  </Text>
                )}
              </S.InputContainer>

              <S.ForgotMyPasswordLink href="/forgot">
                Esqueci a minha senha
              </S.ForgotMyPasswordLink>

              <S.ButtonContainer>
                {isSubmitting ? (
                  <Spinner size="md" baseColor="blue_950" variant="secondary" />
                ) : (
                  <Button
                    type="submit"
                    rounding="rounded"
                    variant="lg"
                    backgroundColor="blue_500"
                    color="white"
                    disabled={isSubmitting}
                    hug={true}
                  >
                    Entrar
                  </Button>
                )}
              </S.ButtonContainer>
              <S.DontHaveAccountContainer>
                <Text>
                  Ainda não tem uma conta?
                  <S.EnterLink href="/signup">Criar</S.EnterLink>
                </Text>
              </S.DontHaveAccountContainer>
              <S.DontHaveAccountContainer>
                <Text>Não, obrigado</Text>
              </S.DontHaveAccountContainer>
            </S.FormContainer>
          </S.LoginContainerContent>
        </S.MainContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
