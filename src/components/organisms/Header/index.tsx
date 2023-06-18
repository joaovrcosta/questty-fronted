import Image from 'next/image'
import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link href="/">
          <Image src={logoImg} width={145} height={46} alt="" />
        </Link>
        <S.SearchInputContainer>
          <S.SearchInput placeholder="Qual a sua dúvidaaa?" />
        </S.SearchInputContainer>
        <S.HeaderActionsContainer>
          <Button border={false} backgroundColor="transparent">
            FAÇA SUA PERGUNTA
          </Button>
          <Button backgroundColor="transparent" border={false}>
            <S.StyledLink href="/signin">ENTRAR</S.StyledLink>
          </Button>
          <Button backgroundColor="blue_200">CADASTRAR</Button>
        </S.HeaderActionsContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
