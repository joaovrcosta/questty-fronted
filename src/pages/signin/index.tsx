import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/signin'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { SiFacebook } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { Footer } from '@/components/organisms/Footer'
import { useForm } from 'react-hook-form'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import api from '@/services/api'
import { setCookie } from 'nookies'
import Router from 'next/router'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Spinner } from '@/components/atoms/Spinner'
import { useState } from 'react'
import axios, { AxiosError } from 'axios'
import { HeaderAuth } from '@/components/organisms/HeaderAuth'
import Head from 'next/head'

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
  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const { isSubmitting } = formState

  const { login } = useAuthStore()

  const isPasswordFilledIn = watch('password')

  const handleSignIn = async (data: FormData) => {
    try {
      const { email, password } = data

      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token } = response.data

      setCookie(undefined, 'questty-token', token, {
        maxAge: 60 * 60 * 24 * 1, // 24 horas
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
      <Head>
        <title>Questty.com.br - Para estudantes. Por estudantes.</title>
      </Head>
      <HeaderAuth />
      <S.SignInContainer>
        <S.SignInContent>
          <S.HeadingContainer>
            <Heading size="md" color="blue_950" weight="bold">
              Entrar
            </Heading>
          </S.HeadingContainer>
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
            <S.EnterWithContainer>
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
            </S.EnterWithContainer>
          </S.FormContainer>
        </S.SignInContent>
      </S.SignInContainer>
      <Footer />
    </>
  )
}

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
