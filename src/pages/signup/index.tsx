import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/signup'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { SiFacebook } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
  return (
    <>
      <Header />
      <S.SignInContainer>
        <S.SignInContent>
          <Heading size="md" color="black" weight="bold">
            Começe agora mesmo:
          </Heading>
          <S.FormContainer>
            <S.InputContainer>
              <Input
                placeholder="exemplo@exemplo.com"
                variant="lg"
                hug={true}
                showLabel={true}
                label="E-mail"
                style={{ marginBottom: '1rem' }}
              />
            </S.InputContainer>

            <S.ButtonContainer>
              <S.RegisterButton
                type="submit"
                rounding="rounded"
                variant="lg"
                backgroundColor="blue_500"
                color="white"
              >
                Registrar-se
              </S.RegisterButton>
            </S.ButtonContainer>
            <S.TermsAndPolicies>
              Ao se inscrever no Questty você concorda com os Termos de Serviço
              e Política de Privacidade do Questty .
            </S.TermsAndPolicies>
            <S.EnterWithContainer>
              <Text weight="bold" size="lg">
                Ou inscreva-se usando:
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
    </>
  )
}
