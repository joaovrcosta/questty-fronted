import * as S from './styles'
import logoImg from '../../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import Link from 'next/link'
import { SearchInput } from '@/components/atoms/SearchInput'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { GetServerSideProps } from 'next'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { Dropdown } from '@/components/molecules/DropdownMenu'

export function Header() {
  const { isLoggedIn, logout, user } = useAuthStore()
  const router = useRouter()

  // const handleResponderClick = () => {
  //   router.push(`/tarefa/${id}`)
  // }

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.FirstBoxContent>
          <Link href="/">
            <S.LogoImage src={logoImg} width={145} height={46} alt="" />
          </Link>
          <SearchInput />
        </S.FirstBoxContent>
        <S.HeaderActionsContainer>
          <S.MakeQuestionButton>
            <Dialog.Root>
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

          {!isLoggedIn && (
            <S.StyledLink href="/signin">
              <S.SignInButton backgroundColor="transparent" border={false}>
                ENTRAR
              </S.SignInButton>
            </S.StyledLink>
          )}

          {!isLoggedIn && (
            <S.StyledLink href="/signup">
              <S.SignUpButton backgroundColor="blue_550">
                CADASTRAR
              </S.SignUpButton>
            </S.StyledLink>
          )}
          {isLoggedIn && <Dropdown id={user?.id} />}
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
