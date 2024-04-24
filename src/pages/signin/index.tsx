import * as S from '../../styles/pages/signin'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { useForm } from 'react-hook-form'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import api from '@/services/api'
import Router, { useRouter } from 'next/router'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Spinner } from '@/components/atoms/Spinner'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { SignInLayout } from '@/components/layouts/signIn'
import { NextSeo } from 'next-seo'

interface FormData {
  email: string
  password: string
}

const loginFormSchema = zod.object({
  email: zod.string().email('E-mail inválido'),
  password: zod.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

export default function SignIn() {
  const [error, setError] = useState<string | null>(null)
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<FormData>({
      resolver: zodResolver(loginFormSchema),
    })

  const router = useRouter()

  useEffect(() => {
    if (router.query?.email) {
      setValue('email', String(router.query.email))
    }
  }, [router.query?.email, setValue])

  const { isSubmitting } = formState

  const { login } = useAuthStore()

  const isPasswordFilledIn = watch('password')

  const handleSignIn = async (data: FormData) => {
    try {
      const existingToken = Cookies.get('questty-token')

      if (existingToken) {
        await Router.push('/home')
        return
      }

      const { email, password } = data

      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token } = response.data

      Cookies.set('questty-token', token, {
        expires: 60 * 60 * 24 * 3, // 7 day
        path: '/',
        secure: true,
      })

      const userResponse = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const user = userResponse.data.user

      login(user, token)

      await Router.push('/home')
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

  return (
    <>
      <NextSeo
        title="Questty.com - Para curiosos. Para todo mundo"
        description="O Questty é a plataforma onde estudantes e especialistas convergem para desvendar os enigmas acadêmicos mais desafiadores, criando uma comunidade dinâmica de aprendizado colaborativo."
      />

      <S.SignInContainer>
        <S.SignInContent>
          <S.HeadingContainer>
            <Heading size="md" color="blue_950" weight="bold">
              Entrar
            </Heading>
          </S.HeadingContainer>
          <S.SubTitle>
            <Heading size="xs" color="blue_950" style={{ textAlign: 'center' }}>
              Onde perguntas se transformam em aprendizado eficaz.
            </Heading>
          </S.SubTitle>
          <S.FormContainer onSubmit={handleSubmit(handleSignIn)}>
            <S.InputContainer>
              <S.EmailInputContainer>
                <Input
                  {...register('email')}
                  placeholder="exemplo@exemplo.com"
                  variant="lg"
                  hug={true}
                  showLabel={true}
                  label="E-mail"
                  style={{ marginBottom: '0.5rem', height: '52px' }}
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
                style={{ marginBottom: '0.5rem', height: '52px' }}
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
            {/* <S.EnterWithContainer>
              <Text weight="bold" size="lg">
                Entre com:
              </Text>
              <S.SocialAuthContainer>
                <S.WithGoogle>
                  <FcGoogle size={24} />
                </S.WithGoogle>
                <S.WithFacebook>
                  <SiFacebook size={24} color="#3b5998" />
                </S.WithFacebook>
              </S.SocialAuthContainer>
            </S.EnterWithContainer> */}
          </S.FormContainer>
        </S.SignInContent>
      </S.SignInContainer>
    </>
  )
}

SignIn.getLayout = (page: React.ReactNode) => (
  <SignInLayout>{page}</SignInLayout>
)

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const tokenJwt = ctx.req.cookies['questty-token']

  if (tokenJwt) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    }
  }

  return {
    props: {},
  }
}
