import Image from 'next/image'
import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoImage src={logoImg} width={145} height={46} alt="" />
        <S.SearchInputContainer>
          <S.SearchInput placeholder="Qual a sua dúvida?" />
        </S.SearchInputContainer>
        <S.HeaderActionsContainer>
          <S.MakeYourQuestionButton
            border={false}
            backgroundColor="transparent"
          >
            FAÇA SUA PERGUNTA
          </S.MakeYourQuestionButton>
          <S.SignInButton backgroundColor="transparent" border={false}>
            <S.StyledLink href="/signin">ENTRAR</S.StyledLink>
          </S.SignInButton>
          <S.SignUpButton backgroundColor="blue_500">
            <S.StyledLink href="/signup" style={{ color: 'white' }}>
              CADASTRAR
            </S.StyledLink>
          </S.SignUpButton>
        </S.HeaderActionsContainer>
      </S.HeaderContent>
      <S.SubHeader>
        <S.SubHeaderContent>
          <S.StyledButton backgroundColor="transparent" border={false}>
            <S.StyledLink href="/signin">ENTRAR</S.StyledLink>
          </S.StyledButton>
          <Button backgroundColor="blue_500">
            <S.StyledLink href="/signup" style={{ color: 'white' }}>
              CADASTRAR
            </S.StyledLink>
          </Button>
        </S.SubHeaderContent>
      </S.SubHeader>
    </S.HeaderContainer>
  )
}
