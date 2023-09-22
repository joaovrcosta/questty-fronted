import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/profile'
import { Text } from '@/components/atoms/Text'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '@/components/organisms/Footer'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import Cookies from 'js-cookie'
import router from 'next/router'
import api from '@/services/api'
import { IProfileData } from '@/shared/types'
import { useProfileStore } from '@/features/stores/profile/useProfileStore'
import { useEffect } from 'react'
import { getDayOfYear } from '@/utils/getDayOfYear'
import Link from 'next/link'

export default function Profile(props: IProfileData) {
  const { logout, isLoggedIn } = useAuthStore()
  const { setProfile } = useProfileStore()
  const authenticatedUser = useAuthStore((state) => state.user)
  const isCurrentUserProfile = authenticatedUser?.id === props.userData.id

  useEffect(() => {
    setProfile(props)
  }, [props])

  const logoutUser = async () => {
    logout()

    const token = Cookies.get('questty-token')
    if (token) {
      Cookies.remove('questty-token')
    }

    router.push('/')
  }

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
              {isLoggedIn && isCurrentUserProfile && (
                <Link href={`edit/${props.userData.id}`}>
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
                </Link>
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
              @{props.userData.name}
            </Text>

            <S.UserDetailsBox>
              <S.AnswersQuantity>
                <Text weight="bold">{props.userData.answers.length}</Text>
                <Text size="xs">Respostas</Text>
              </S.AnswersQuantity>
              <S.AnswersQuantity>
                <Text weight="bold">0</Text>
                <Text size="xs">Melhores</Text>
              </S.AnswersQuantity>
              <S.AnswersQuantity>
                <Text weight="bold">0</Text>
                <Text size="xs">Valeus</Text>
              </S.AnswersQuantity>
            </S.UserDetailsBox>

            <S.UserEditing>
              {isLoggedIn && isCurrentUserProfile && (
                <Link href={`edit/${props.userData.id}`}>
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
                </Link>
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
                    {getDayOfYear(props.userData.createdAt)}
                  </Text>
                </S.CreatedAt>
                {isLoggedIn && isCurrentUserProfile && (
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
              {props.userData?.answers && props.userData.answers.length > 0 ? (
                props.userData.answers.map((question) => (
                  <QuestionCard
                    readOnly={true}
                    key={question.id}
                    id={question.question_id}
                    content={question.content}
                    createdAt={question.createdAt}
                  />
                ))
              ) : (
                <S.NotFindAnyAnswer>
                  <Text size="md" color="gray_500">
                    Nenhuma resposta encontrada.
                  </Text>
                </S.NotFindAnyAnswer>
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

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params as { id: string }

  try {
    const res = await api.get(`profile/${id}`)

    const userData = res.data.user

    return { props: { userData, id } }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { userData: null } }
  }
}
