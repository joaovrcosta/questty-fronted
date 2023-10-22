import { Header } from '@/components/organisms/Header'
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

const registerSchema = zod.object({
  username: zod
    .string()
    .min(3, 'O nome de usuário deve ter no mínimo 3 caracteres')
    .max(22, 'O nome de usuário deve ter no máximo 22 caracteres')
    .refine((value) => /^[a-z]+$/.test(value), {
      message: 'O nome de usuário deve conter apenas letras minúsculas',
      path: ['username'],
    }),
  email: zod.string().email('E-mail inválido'),
  password: zod
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(32, 'A senha deve ter no máximo 22 caracteres')
    .refine((value) => /[A-Z]+/.test(value), {
      message: 'A senha deve conter pelo menos uma letra maiúscula',
      path: ['password'],
    })
    .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+/.test(value), {
      message: 'A senha deve conter pelo menos um caractere especial',
      path: ['password'],
    })
    .refine((value) => (value.match(/[0-9]/g) || []).length >= 2, {
      message: 'A senha deve conter pelo menos dois números',
      path: ['password'],
    }),
  name: zod.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
})

type RegisterFormData = zod.infer<typeof registerSchema>

export default function Register() {
  const [error, setError] = useState<string | null>(null)
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

  const handleRegister = async (data: RegisterFormData) => {
    try {
      const { username, email, password, name } = data

      const response = await api.post('/users', {
        username,
        email,
        password,
        name,
      })
      await Router.push(`/signin?email=${email}`)
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
      <S.SignUpContainer>
        <S.SignUpContent>
          <Heading size="md" color="black" weight="bold">
            Complete seu cadastro:
          </Heading>
          <S.FormContainer onSubmit={handleSubmit(handleRegister)}>
            <S.InputContainer>
              <Input
                {...register('username')}
                variant="lg"
                hug={true}
                showLabel={true}
                label="Nome de usuário"
                style={{ marginBottom: '1rem' }}
                border={true}
                name="username"
              />
              {formState.errors.username && (
                <Text size="sm" style={{ color: '#D20032' }}>
                  {formState.errors.username.message}
                </Text>
              )}
              <Input
                {...register('name')}
                variant="lg"
                hug={true}
                showLabel={true}
                label="Seu nome e sobrenome"
                style={{ marginBottom: '1rem' }}
                border={true}
                name="name"
              />
              {formState.errors.name && (
                <Text size="sm" style={{ color: '#D20032' }}>
                  {formState.errors.name.message}
                </Text>
              )}
              <Input
                {...register('email')}
                placeholder="exemplo@exemplo.com"
                variant="lg"
                hug={true}
                showLabel={true}
                label="E-mail"
                style={{ marginBottom: '1rem' }}
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
                style={{ marginBottom: '1rem' }}
                border={true}
                type="password"
              />
              {formState.errors.password && (
                <Text size="sm" style={{ color: '#D20032' }}>
                  {formState.errors.password.message}
                </Text>
              )}
            </S.InputContainer>

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
