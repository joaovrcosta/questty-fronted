import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/profile'

import { Text } from '@/components/atoms/Text'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '@/components/organisms/Footer'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { getTimeAgo } from '@/utils/getTimeAgo'
import Cookies from 'js-cookie'
import router from 'next/router'

export default function Profile() {
  const { logout, isLoggedIn } = useAuthStore()

  const logoutUser = async () => {
    logout()
    Cookies.remove('questty-token')

    router.push('/')
  }

  const user = useAuthStore((state) => state.user)

  return (
    <>
      <Header />
      <S.ProfileContainer>
        <S.ProfileContent>
          <S.UserInfo>
            <S.AvatarContainer>
              <S.UserAvatarPhoto
                variant="xl"
                imageUrl="https://avatars.githubusercontent.com/u/70654718?v=4"
              />
              {isLoggedIn && (
                <S.EditButtonMobile
                  variant="lg"
                  rounding="rounded"
                  color="white"
                  backgroundColor="blue_500"
                  style={{
                    padding: '0.65rem 1.5rem',
                  }}
                >
                  Editar Perfil
                </S.EditButtonMobile>
              )}
            </S.AvatarContainer>
            <Text
              size="xl"
              weight="semibold"
              color="blue_950"
              style={{
                fontFamily: 'Poppins',
                marginTop: '1rem',
              }}
            >
              @{user?.name}
            </Text>
            <S.UserEditing>
              {isLoggedIn && (
                <S.EditButton
                  variant="lg"
                  rounding="rounded"
                  color="white"
                  backgroundColor="blue_500"
                  style={{
                    padding: '0.65rem 1.5rem',
                  }}
                >
                  Editar Perfil
                </S.EditButton>
              )}

              <S.SeenIn>
                <S.ActiveIn>
                  <BiTimeFive size={18} />
                  <S.ActiveAtContainer>
                    <Text size="xs">Ativo pela última vez </Text>
                    <Text weight="semibold" size="xs">
                      há 2 dias
                    </Text>
                  </S.ActiveAtContainer>
                </S.ActiveIn>
                <S.CreatedAt>
                  <AiOutlineCalendar size={18} />
                  <Text size="xs">Entrou em </Text>
                  <Text weight="semibold" size="xs">
                    {getTimeAgo(user?.createdAt)}
                  </Text>
                </S.CreatedAt>
                {isLoggedIn && (
                  <S.signOutButton
                    onClick={logoutUser}
                    backgroundColor="transparent"
                    rounding="rounded-thin"
                  >
                    Sair
                  </S.signOutButton>
                )}
              </S.SeenIn>
            </S.UserEditing>
          </S.UserInfo>
          <S.UserHistoryContainer>
            <Text
              size="xl"
              weight="semibold"
              color="blue_950"
              style={{ fontFamily: 'Poppins', marginTop: '1rem' }}
            >
              Ultimas respostas:
            </Text>
            <S.UserHistory>
              {user?.answers ? (
                user.answers.map((question) => (
                  <QuestionCard
                    readOnly={true}
                    key={question.id}
                    id={question.id}
                    content={question.content}
                    createdAt={question.createdAt}
                  />
                ))
              ) : (
                <Text size="md" color="gray_500">
                  Nenhuma resposta encontrada.
                </Text>
              )}
            </S.UserHistory>
            <S.ShowmoreQuestionsButtonContainer>
              <S.showMoreButton
                rounding="rounded-thin"
                backgroundColor="transparent"
                border={false}
              >
                Mostrar mais
              </S.showMoreButton>
            </S.ShowmoreQuestionsButtonContainer>
          </S.UserHistoryContainer>
        </S.ProfileContent>
      </S.ProfileContainer>
      <Footer />
    </>
  )
}
