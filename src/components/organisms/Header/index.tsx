import Image from 'next/image'
import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoImage src={logoImg} width={145} height={46} alt="" />
        <S.SearchInputContainer>
          <S.SearchInput placeholder="Qual a sua dúvida?" />
        </S.SearchInputContainer>
        <S.HeaderActionsContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <S.MakeYourQuestionButton
                border={false}
                backgroundColor="transparent"
              >
                FAÇA SUA PERGUNTA
              </S.MakeYourQuestionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>

          <S.StyledLink href="/signin">
            <S.SignInButton backgroundColor="transparent" border={false}>
              ENTRAR
            </S.SignInButton>
          </S.StyledLink>

          <S.StyledLink href="/signup">
            <S.SignUpButton backgroundColor="blue_500">
              CADASTRAR
            </S.SignUpButton>
          </S.StyledLink>
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
