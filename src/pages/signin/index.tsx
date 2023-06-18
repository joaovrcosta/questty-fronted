import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/signin'
import { Heading } from '@/components/atoms/Heading'
import { Input } from '@/components/atoms/Input'

export default function SignIn() {
  return (
    <>
      <Header />
      <S.SignInContainer>
        <S.SignInContent>
          <Heading size="md" color="black" weight="bold">
            Entre com a sua conta:
          </Heading>
          <S.FormContainer>
            <Input
              placeholder="exemplo@exemplo.com"
              variant="lg"
              hug={true}
              showLabel={true}
              label="E-mail"
            />
            <Input
              placeholder="exemplo@exemplo.com"
              variant="lg"
              hug={true}
              showLabel={true}
              label="Senha"
            />
          </S.FormContainer>
        </S.SignInContent>
      </S.SignInContainer>
    </>
  )
}
