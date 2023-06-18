import Image from 'next/image'
import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Image src={logoImg} width={145} height={46} alt="" />
        <S.SearchInputContainer>
          <S.SearchInput placeholder="Qual a sua dúvida?" />
        </S.SearchInputContainer>
        <S.HeaderActionsContainer>
          <S.StyledButton border={false} backgroundColor="transparent">
            FAÇA SUA PERGUNTA
          </S.StyledButton>
          <S.StyledButton backgroundColor="transparent" border={false}>
            <S.StyledLink href="/signin">ENTRAR</S.StyledLink>
          </S.StyledButton>
          <Button backgroundColor="blue_200">
            <S.StyledLink href="/signup">CADASTRAR</S.StyledLink>
          </Button>
        </S.HeaderActionsContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
