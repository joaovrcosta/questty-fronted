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
import userStore from '@/features/app/user-store'

interface FormData {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit } = useForm<FormData>()

  async function handleSignIn(data: FormData) {
    try {
      await userStore.signIn(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <S.SignInContainer>
        <S.SignInContent>
          <Heading size="md" color="black" weight="bold">
            Entre com a sua conta:
          </Heading>
          <S.FormContainer onSubmit={handleSubmit(handleSignIn)}>
            <S.InputContainer>
              <Input
                {...register('email')}
                placeholder="exemplo@exemplo.com"
                variant="lg"
                hug={true}
                showLabel={true}
                label="E-mail"
                style={{ marginBottom: '1rem' }}
              />
              <Input
                {...register('password')}
                placeholder="Digite sua senha"
                type="password"
                variant="lg"
                hug={true}
                showLabel={true}
                label="Senha"
              />
            </S.InputContainer>
            <S.StayLoggedContainer>
              <input type="checkbox" id="stay-logged" />
              <label htmlFor="stay-logged">Mantenha-me conectado</label>
            </S.StayLoggedContainer>
            <S.ForgotMyPasswordLink href="/forgot">
              Esqueci a minha senha
            </S.ForgotMyPasswordLink>
            <S.ButtonContainer>
              <Button
                type="submit"
                rounding="rounded"
                variant="lg"
                backgroundColor="blue_500"
                color="white"
              >
                Entrar
              </Button>
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
