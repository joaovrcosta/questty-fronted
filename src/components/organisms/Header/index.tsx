import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/modals/NewQuestionModal'
import Link from 'next/link'
import { SearchInput } from '@/components/atoms/SearchInput'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { GetServerSideProps } from 'next'
import api from '@/services/api'
import { Dropdown } from '@/components/molecules/DropdownMenu'
import { useQuestionModalStore } from '@/features/stores/modals-stores/newQuestionModal/useNewQuestionModal'
import { useEffect, useState } from 'react'
import { SkeletonCircle, SkeletonLine } from '@/components/atoms/Skeleton'
import Cookies from 'js-cookie'

export function Header() {
  const [loading, setLoading] = useState(false)

  const { isLoggedIn, user, token } = useAuthStore()
  const { isOpen, setIsOpen } = useQuestionModalStore()

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

  useEffect(() => {
    const cookieToken = Cookies.get('questty-token')

    if (cookieToken && !isLoggedIn) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [isLoggedIn])

  return (
    <S.HeaderContainer className={scrolled ? '--scrolled' : ''}>
      <S.HeaderContent>
        <S.FirstBoxContent>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <S.LogoImage src={logoImg} width={145} height={46} alt="" />
          </Link>
          <SearchInput backgroundColor="white" />
        </S.FirstBoxContent>
        <S.HeaderActionsContainer existsToken={token == null ? true : false}>
          {loading ? (
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>
                <SkeletonLine
                  width={29}
                  rows={3}
                  height={2}
                  rounding="rounded"
                />
              </div>
              <div>
                <SkeletonLine
                  width={30}
                  rows={3}
                  height={2}
                  rounding="rounded"
                />
              </div>
            </div>
          ) : (
            <>
              <S.MakeQuestionButton>
                <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                  <Dialog.Trigger asChild>
                    <S.MakeYourQuestionButton
                      border={false}
                      backgroundColor="transparent"
                    >
                      PERGUNTAR
                    </S.MakeYourQuestionButton>
                  </Dialog.Trigger>
                  <NewTransactionModal />
                </Dialog.Root>
              </S.MakeQuestionButton>
            </>
          )}

          {loading ? (
            <div>
              <SkeletonCircle size={44} rows={1} />
            </div>
          ) : (
            <>
              {!isLoggedIn && (
                <S.HeaderActionsContainer>
                  <S.StyledLink href="/signin">
                    <S.SignInButton
                      backgroundColor="transparent"
                      border={false}
                    >
                      ENTRAR
                    </S.SignInButton>
                  </S.StyledLink>

                  <S.StyledLink href="/signup">
                    <S.SignUpButton backgroundColor="blue_500">
                      CRIAR CONTA
                    </S.SignUpButton>
                  </S.StyledLink>
                </S.HeaderActionsContainer>
              )}

              <S.AvatarContainer>
                {isLoggedIn && <Dropdown id={user?.id} />}
              </S.AvatarContainer>
            </>
          )}
        </S.HeaderActionsContainer>
      </S.HeaderContent>
      {isLoggedIn ? (
        <div></div>
      ) : (
        <S.SubHeader>
          <S.SubHeaderContent>
            <S.StyledLink href="/signin">
              <S.SubSignInButton backgroundColor="transparent">
                ENTRAR
              </S.SubSignInButton>
            </S.StyledLink>

            <S.StyledLink href="/signin">
              <S.SubSignUpButton backgroundColor="blue_500" color="white">
                CRIAR CONTA
              </S.SubSignUpButton>
            </S.StyledLink>
          </S.SubHeaderContent>
        </S.SubHeader>
      )}
    </S.HeaderContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tokenJwt = ctx.req.cookies['questty-token']

  const { login } = useAuthStore()

  if (tokenJwt) {
    try {
      const userResponse = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${tokenJwt}`,
        },
      })

      if (userResponse.status === 200) {
        const user = userResponse.data

        login(user, tokenJwt)
      }
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error)
    }
  }

  return {
    props: {},
  }
}
