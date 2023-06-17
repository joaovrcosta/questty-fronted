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
          <Button border={false} backgroundColor="transparent">
            Continuar
          </Button>
          <Button backgroundColor="transparent" border={false}>
            Continuar
          </Button>
          <Button backgroundColor="blue_200">CADASTRAR</Button>
        </S.HeaderActionsContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
