import * as S from './styles'
import logoImg from '../../../assets/questty-logo-header-answers.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import Link from 'next/link'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { GetServerSideProps } from 'next'
import api from '@/services/api'
import { Dropdown } from '@/components/molecules/DropdownMenu'
import { useQuestionModalStore } from '@/features/stores/newQuestionModal/useNewQuestionModal'
import { useEffect, useState } from 'react'
import { SkeletonCircle, SkeletonLine } from '@/components/atoms/Skeleton'
import Cookies from 'js-cookie'

export function HeaderAnswer() {
  const [loading, setLoading] = useState(false)

  const { isLoggedIn, user, token } = useAuthStore()
  const { isOpen, setIsOpen } = useQuestionModalStore()

  useEffect(() => {
    const cookieToken = Cookies.get('questty-token')

    if (cookieToken && !isLoggedIn) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [isLoggedIn])

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.FirstBoxContent>
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <S.LogoImage src={logoImg} width={110} height={36} alt="" />
          </Link>
        </S.FirstBoxContent>
        <S.HeaderActionsContainer existsToken={token == null ? true : false}>
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
                    <S.SignUpButton backgroundColor="blue_550">
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
      {!loading ? (
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
