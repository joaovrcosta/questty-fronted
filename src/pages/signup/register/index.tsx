import * as S from '@/styles/pages/register'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'
import { useForm } from 'react-hook-form'
import { Footer } from '@/components/organisms/Footer'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { HeaderAuth } from '@/components/organisms/HeaderAuth'
import Head from 'next/head'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Router, { useRouter } from 'next/router'
import { Spinner } from '@/components/atoms/Spinner'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import api from '@/services/api'
import { SignInLayout } from '@/components/layouts/signIn'
import { NextSeo } from 'next-seo'

const registerSchema = zod.object({
  username: zod
    .string()
    .min(3, 'O nome de usuário deve ter no mínimo 3 caracteres')
    .max(22, 'O nome de usuário deve ter no máximo 22 caracteres')
    .regex(
      /^[a-z]+$/,
      'O nome de usuário deve conter apenas letras minúsculas'
    ),
  email: zod.string().email('E-mail inválido'),
  password: zod
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(32, 'A senha deve ter no máximo 22 caracteres')
    .regex(/[A-Z]+/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/,
      'A senha deve conter pelo menos um caractere especial'
    )
    .regex(/[0-9]+/, 'A senha deve conter pelo menos um número'),
  name: zod.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
})

type RegisterFormData = zod.infer<typeof registerSchema>

export default function Register() {
  const [error, setError] = useState<string | null>('')
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<RegisterFormData>({
      resolver: zodResolver(registerSchema),
    })

  const router = useRouter()

  useEffect(() => {
    if (router.query?.email) {
      setValue('email', String(router.query.email))
    }
  }, [router.query?.email, setValue])

  const { isSubmitting } = formState

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const { username, email, password, name } = data

      const response = await api.post('/users', {
        username,
        email,
        password,
        name,
      })

      // Verifique o status da resposta para detectar um erro 409
      if (response.status === 409) {
        setError('Usuário ou e-mail já existe')
      } else {
        await Router.push(`/signin?email=${email}`)
      }
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

      <HeaderAuth />
      <S.SignUpContainer>
        <S.SignUpContent>
          <Heading size="md" color="black" weight="bold">
            Complete seu cadastro:
          </Heading>
          <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
            <S.InputContainer>
              <Input
                {...register('name')}
                variant="lg"
                hug={true}
                showLabel={true}
                label="Nome completo"
                style={{ marginBottom: '0.5rem' }}
                border={true}
                name="name"
              />
              {formState.errors.name && (
                <Text size="sm" style={{ color: '#D20032' }}>
                  {formState.errors.name.message}
                </Text>
              )}
              <Input
                {...register('username')}
                variant="lg"
                hug={true}
                showLabel={true}
                label="Nome de usuário (exibido no perfil)"
                style={{ marginBottom: '0.5rem' }}
                border={true}
                name="username"
              />
              {formState.errors.username && (
                <Text size="sm" style={{ color: '#D20032' }}>
                  {formState.errors.username.message}
                </Text>
              )}
              <Input
                {...register('email')}
                placeholder="exemplo@exemplo.com"
                variant="lg"
                hug={true}
                showLabel={true}
                label="E-mail"
                style={{ marginBottom: '0.5rem' }}
                border={true}
                name="email"
              />
              {formState.errors.email && (
                <Text size="sm" style={{ color: '#D20032' }}>
                  {formState.errors.email.message}
                </Text>
              )}
              <Input
                {...register('password')}
                variant="lg"
                hug={true}
                showLabel={true}
                label="Senha"
                border={true}
                type="password"
              />
              {formState.errors.password && (
                <Text
                  size="sm"
                  style={{ color: '#D20032', marginTop: '0.5rem' }}
                >
                  {formState.errors.password.message}
                </Text>
              )}
            </S.InputContainer>

            {error && (
              <S.ErrorContainer>
                <Text size="sm" color="danger_500">
                  {error === 'E-mail already exists'
                    ? 'Usuário ou e-mail já existe'
                    : error}
                </Text>
              </S.ErrorContainer>
            )}

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
                  Criar conta
                </Button>
              )}
            </S.ButtonContainer>
            <S.BackLink>
              <S.BackLinkText href="/signup">Voltar</S.BackLinkText>
            </S.BackLink>
            <S.TermsAndPolicies>
              Ao se inscrever no Questty você concorda com os{' '}
              <S.Terms href="/info/regulation">Termos de Serviço</S.Terms>e{' '}
              <S.PolicyPrivacy href="/info/policy">
                Política de Privacidade
              </S.PolicyPrivacy>{' '}
              do Questty .
            </S.TermsAndPolicies>
          </S.FormContainer>
        </S.SignUpContent>
      </S.SignUpContainer>
    </>
  )
}

Register.getLayout = (page: React.ReactNode) => (
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
