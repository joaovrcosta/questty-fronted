import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function HeaderLandingPage() {
  // const [scrolling, setScrolling] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 40) {
  //       setScrolling(true)
  //     } else {
  //       setScrolling(false)
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link href="/">
          <S.LogoImage src={logoImg} width={160} height={52} alt="" />
        </Link>
        <S.HeaderActionsContainer>
          <S.StyledLink href="/signin">
            <S.SignInButton backgroundColor="white" boxShadow={true}>
              ENTRAR
            </S.SignInButton>
          </S.StyledLink>

          <S.StyledLink href="/signup">
            <S.SignUpButton
              backgroundColor="white"
              borderColor="yellow_650"
              boxShadow={true}
            >
              CADASTRAR
            </S.SignUpButton>
          </S.StyledLink>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <S.MakeYourQuestionButton backgroundColor="yellow_600">
                FAÇA SUA PERGUNTA
              </S.MakeYourQuestionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
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
