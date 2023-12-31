import * as S from './styles'
import logoImg from '../../../assets/questty-logo-landing.svg'
import blackLogo from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SearchInput } from '@/components/atoms/SearchInput'
import { RiMenu5Fill } from 'react-icons/ri'

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
      <S.HeaderContent className={scrolled ? '--scrolled' : ''}>
        {scrolled ? (
          <S.LogoImage
            src={blackLogo}
            width={160}
            height={40}
            alt="Questty Logo Scrolled"
          />
        ) : (
          <S.LogoImage
            src={logoImg}
            width={160}
            height={48}
            alt="Questty Logo"
          />
        )}

        <SearchInput backgroundColor="white" />

        <S.HeaderActionsContainer>
          <S.StyledLink href="/signin">
            <S.SignInButton backgroundColor="white" boxShadow={true}>
              ENTRAR
            </S.SignInButton>
          </S.StyledLink>

          <S.MakeYourQuestionButton
            backgroundColor="blue_500"
            color="white"
            onClick={handleButtonClick}
          >
            FAÇA SUA PERGUNTA
          </S.MakeYourQuestionButton>
        </S.HeaderActionsContainer>
        <S.ButtonsMobileContainer>
          <S.NavigationButton className={scrolled ? '--scrolled' : ''}>
            <RiMenu5Fill size={24} />
          </S.NavigationButton>
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
