import * as S from '@/styles/pages/signup'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'
import { useForm } from 'react-hook-form'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { HeaderAuth } from '@/components/organisms/HeaderAuth'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Router from 'next/router'
import { Spinner } from '@/components/atoms/Spinner'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { SignInLayout } from '@/components/layouts/signIn'
import { NextSeo } from 'next-seo'

const claimEmailSchema = zod.object({
  email: zod.string().email('E-mail inválido'),
})

type ClaimEmailFormData = zod.infer<typeof claimEmailSchema>

export default function SignUp() {
  const { register, handleSubmit, formState } = useForm<ClaimEmailFormData>({
    resolver: zodResolver(claimEmailSchema),
  })

  const { isSubmitting } = formState

  const handleClaimEmail = async (data: ClaimEmailFormData) => {
    const { email } = data

    await Router.push(`/signup/register?email=${email}`)
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
            Começe agora mesmo:
          </Heading>
          <form onSubmit={handleSubmit(handleClaimEmail)}>
            <S.InputContainer>
              <Input
                {...register('email')}
                placeholder="exemplo@exemplo.com"
                variant="lg"
                hug={true}
                showLabel={true}
                label="E-mail"
                style={{ marginBottom: '1rem', height: '52px' }}
                border={true}
              />
              {formState.errors.email && (
                <span style={{ color: '#D20032' }}>
                  {formState.errors.email.message}
                </span>
              )}
            </S.InputContainer>

            <S.AlreadyHaveAccount>
              <Text size="sm">Já tem uma conta?</Text>
              <S.AlreadyHaveAccountLink href="/signin">
                Faça login
              </S.AlreadyHaveAccountLink>
            </S.AlreadyHaveAccount>

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
                  Continuar
                </Button>
              )}
            </S.ButtonContainer>
            <S.TermsAndPolicies>
              Ao se inscrever no Questty você concorda com os Termos de Serviço
              e Política de Privacidade do Questty .
            </S.TermsAndPolicies>
          </form>
        </S.SignUpContent>
      </S.SignUpContainer>
    </>
  )
}

SignUp.getLayout = (page: React.ReactNode) => (
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
