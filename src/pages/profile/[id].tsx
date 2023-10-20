import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/profile'
import { Text } from '@/components/atoms/Text'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { BiTimeFive } from 'react-icons/bi'
import { ImExit } from 'react-icons/im'
import { AiOutlineCalendar } from 'react-icons/ai'
import { Footer } from '@/components/organisms/Footer'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import Cookies from 'js-cookie'
import router, { useRouter } from 'next/router'
import { PiMedalFill } from 'react-icons/pi'
import api from '@/services/api'
import { IProfileData } from '@/shared/types'
import { useProfileStore } from '@/features/stores/profile/useProfileStore'
import { useEffect } from 'react'
import { getDayOfYear } from '@/utils/getDayOfYear'
import Link from 'next/link'
import { MdQuestionAnswer } from 'react-icons/md'
import starIcon from '../../assets/star.svg'
import Image from 'next/image'
import Head from 'next/head'
import avatar_empty from '../../assets/avatar_empty.svg'

export default function Profile(props: IProfileData) {
  const router = useRouter()
  const { logout, isLoggedIn } = useAuthStore()
  const { setProfile, user } = useProfileStore()
  const authenticatedUser = useAuthStore((state) => state.user)
  const isCurrentUserProfile = authenticatedUser?.id === props.userData.id

  useEffect(() => {
    setProfile(props)
  }, [props])

  const handleLogoutClick = () => {
    useAuthStore.getState().logout(router)
  }

  return (
    <>
      <Head>
        <title>{user?.userData.name} | Questty</title>
      </Head>

      <Header />
      <S.ProfileContainer>
        <S.ProfileContent isLoggedIn={isLoggedIn}>
          <S.UserInfo>
            <S.AvatarContainer>
              <S.UserAvatarPhoto
                id={props.userData.id}
                variant="xl"
                imageUrl={
                  props.userData.avatar_url ? props.userData.avatar_url : null
                }
              />
              {isLoggedIn && isCurrentUserProfile && (
                <Link
                  href={`edit/${props.userData.id}`}
                  style={{ textDecoration: 'none' }}
                >
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
              <span style={{ color: '#2089EA', fontWeight: 'bold' }}>@</span>{' '}
              {props.userData.username}
            </Text>

            <S.UserDetailsBox>
              <S.AnswersQuantity>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <MdQuestionAnswer size={16} color="#2089EA" />
                  <Text weight="bold" color="blue_950">
                    {props.userData.answers.length}
                  </Text>
                </div>

                <Text size="xs" color="blue_950">
                  Respostas
                </Text>
              </S.AnswersQuantity>
              <S.AnswersQuantity>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <PiMedalFill size={16} color="#EBA900" />
                  <Text weight="bold" color="blue_950">
                    0
                  </Text>
                </div>
                <Text size="xs" color="blue_950">
                  Melhores
                </Text>
              </S.AnswersQuantity>
              <S.AnswersQuantity>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <Image src={starIcon} alt="" />
                  <Text weight="bold" color="blue_950">
                    0
                  </Text>
                </div>
                <Text size="xs" color="blue_950">
                  Valeus
                </Text>
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
                  <Text size="xs">Por aqui desde </Text>
                  <Text weight="semibold" size="xs">
                    {getDayOfYear(props.userData.createdAt)}
                  </Text>
                </S.CreatedAt>
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
                    author_id={question.author_id}
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

  const existingToken = Cookies.get('questty-token')

  if (existingToken) {
    return { props: { token: existingToken, id } }
  }

  try {
    const res = await api.get(`profile/${id}`)

    const userData = res.data.user

    return { props: { userData, id } }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { userData: null } }
  }
}
