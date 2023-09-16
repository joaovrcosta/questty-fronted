import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import { Button } from '@/components/atoms/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import Link from 'next/link'
import { SearchInput } from '@/components/atoms/SearchInput'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { parse } from 'cookie'
import api from '@/services/api'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { Avatar } from '@/components/atoms/Avatar'

export function Header() {
  const { isLoggedIn, logout } = useAuthStore()
  const router = useRouter()

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <Link href="/">
          <S.LogoImage src={logoImg} width={145} height={46} alt="" />
        </Link>
        <SearchInput />
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

          {!isLoggedIn && (
            <S.StyledLink href="/signin">
              <S.SignInButton backgroundColor="transparent" border={false}>
                ENTRAR
              </S.SignInButton>
            </S.StyledLink>
          )}

          {!isLoggedIn && (
            <S.StyledLink href="/signup">
              <S.SignUpButton backgroundColor="blue_500">
                CADASTRAR
              </S.SignUpButton>
            </S.StyledLink>
          )}
          {isLoggedIn && (
            <Avatar
              imageUrl="https://avatars.githubusercontent.com/u/70654718?v=4"
              variant="lg"
            />
          )}

          {/* {isLoggedIn && (
            <S.SignUpButton
              onClick={logoutUser}
              backgroundColor="transparent"
              border={false}
            >
              SAIR
            </S.SignUpButton>
          )} */}
        </S.HeaderActionsContainer>
      </S.HeaderContent>
      {/* ... */}
    </S.HeaderContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tokenJwt = ctx.req.cookies['questty-token']

  console.log(tokenJwt)

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
