import * as S from './styles'
import logoImg from '../../../assets/questtyLogoTest.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/modals/NewQuestionModal'
import Link from 'next/link'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { GetServerSideProps } from 'next'
import api from '@/services/api'
import { Dropdown } from '@/components/molecules/DropdownMenu'
import { useQuestionModalStore } from '@/features/stores/modals-stores/newQuestionModal/useNewQuestionModal'
import { useEffect, useState } from 'react'
import { SkeletonCircle, SkeletonLine } from '@/components/atoms/Skeleton'
import Cookies from 'js-cookie'
import { IoIosArrowBack } from 'react-icons/io'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import { Text } from '@/components/atoms/Text'
import { FcInfo } from 'react-icons/fc'
import { Tooltip } from '@/components/molecules/Tooltip'
import { ConfirmModal } from '@/components/modals/ConfirmModal'
import { useConfirmModalStore } from '@/features/stores/modals-stores/confirmModal/useConfirmModal'

export function HeaderAnswer() {
  const [loading, setLoading] = useState(false)

  const { isLoggedIn, user, token } = useAuthStore()
  // const { isOpen, setIsOpen, setIsAnswering } = useQuestionModalStore()
  const { setIsOpen, setIsAnswering, isOpen } = useAnswerModalStore()
  const { setIsModalOpen, isModalOpen } = useConfirmModalStore()

  const handleCloseModal = () => {
    setIsOpen(false)
    setIsAnswering(false)
  }

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
          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
              <S.BackButtonContainer>
                <IoIosArrowBack size={24} />
              </S.BackButtonContainer>
            </Dialog.Trigger>
            <ConfirmModal />
          </Dialog.Root>
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

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <Text style={{ whiteSpace: 'nowrap' }}>
                  Como ganhar pontos?
                </Text>
                <Tooltip content="Para ganhar pontos você deve responder perguntas">
                  <FcInfo size={24} />
                </Tooltip>
              </div>

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
