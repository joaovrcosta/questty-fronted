import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function HeaderLandingPage() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const router = useRouter()

  const handleButtonClick = () => {
    router.push('/question/add')
  }

  return (
    <S.HeaderContainer className={scrolled ? '--scrolled' : ''}>
      <S.HeaderContent>
        <Link href="/">
          <S.LogoImage
            src={logoImg}
            width={160}
            height={52}
            alt="Questty Logo"
          />
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

          <S.MakeYourQuestionButton
            backgroundColor="yellow_600"
            onClick={handleButtonClick}
          >
            FAÇA SUA PERGUNTA
          </S.MakeYourQuestionButton>
        </S.HeaderActionsContainer>
        <S.ButtonsMobileContainer>
          <S.StyledLink href="/signin">
            <Button backgroundColor="transparent" border={false}>
              ENTRAR
            </Button>
          </S.StyledLink>
          <S.StyledLink href="/signup">
            <Button backgroundColor="transparent" border={false}>
              CADASTRE-SE
            </Button>
          </S.StyledLink>
        </S.ButtonsMobileContainer>
      </S.HeaderContent>
      {/* <S.SubHeader>
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
      </S.SubHeader> */}
    </S.HeaderContainer>
  )
}
