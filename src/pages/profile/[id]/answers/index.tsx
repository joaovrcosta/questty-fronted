import * as S from '@/styles/pages/profile/answers'
import { Text } from '@/components/atoms/Text'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import * as Dialog from '@radix-ui/react-dialog'
import Cookies from 'js-cookie'
import { PiMedalFill } from 'react-icons/pi'
import api from '@/services/api'
import { IProfileData } from '@/shared/types'
import { useProfileStore } from '@/features/stores/profile/useProfileStore'
import { useEffect, useState } from 'react'
import { getDayOfYear } from '@/utils/getDayOfYear'
import Link from 'next/link'
import { MdQuestionAnswer } from 'react-icons/md'
import Head from 'next/head'
import { UserActivityTabs } from '@/components/molecules/UserActivity'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import { QuestionCardProfile } from '@/components/Cards/QuestionCardProfile'
import { Button } from '@/components/atoms/Button'
import { MdEmojiFlags } from 'react-icons/md'
import { IoMdPersonAdd } from 'react-icons/io'
import { Tooltip } from '@/components/molecules/Tooltip'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import handleFollowUser from '@/utils/handle/handleFollowUser'
import { FollowButton } from '@/components/molecules/FollowButton'
import { NextSeo } from 'next-seo'
import { useAuthModalStore } from '@/features/stores/modals-stores/authModal/authModal'
import { LoginModal } from '@/components/modals/LoginModal'

export default function Answers(props: IProfileData) {
  const [activeTab, setActiveTab] = useState('answers')
  const { isLoggedIn, token } = useAuthStore()
  const { isOpening, setIsOpening } = useAuthModalStore()
  const { setProfile, user } = useProfileStore()
  const authenticatedUser = useAuthStore((state) => state.user)
  const isCurrentUserProfile = authenticatedUser?.id === props.userData.id
  const [isAlreadyFollowing, setIsAlreadyFollowing] = useState(false)

  const usernameDisplay = `${props.userData.username} - questty.com`

  useEffect(() => {
    setProfile(props)
  }, [props])

  useEffect(() => {
    const fetchFollowData = async () => {
      try {
        if (props.userData && props.userData.id) {
          const res = await api.get(`follow-status/${props.userData.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (res.status === 200) {
            const data = res.data
            setIsAlreadyFollowing(data.isFollowing === true)
          } else {
            console.log(res.status)
          }
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    fetchFollowData()
  }, [props.userData.id, token])

  const handleFollow = () => {
    handleFollowUser(props, isAlreadyFollowing, token, setIsAlreadyFollowing)
  }

  return (
    <>
      <NextSeo
        title={usernameDisplay}
        description="O Questty é a plataforma onde estudantes e especialistas convergem para desvendar os enigmas acadêmicos mais desafiadores, criando uma comunidade dinâmica de aprendizado colaborativo."
      />

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
                  href={`/profile/${props.userData.id}/edit`}
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
                    Editar
                  </S.EditButtonMobile>
                </Link>
              )}
            </S.AvatarContainer>
            <div>
              <Text
                size="xx1"
                weight="semibold"
                color="blue_950"
                style={{
                  fontFamily: 'Poppins',
                  marginTop: '1.25rem',
                }}
              >
                {props.userData.name}
              </Text>

              <Text
                size="md"
                weight="regular"
                color="gray_400"
                style={{
                  fontFamily: 'Poppins',
                  marginTop: '0.25rem',
                }}
              >
                {/* <span
                  style={{
                    color: '#2089EA',
                    fontWeight: 'bold',
                    userSelect: 'none',
                  }}
                >
                  @
                </span>{' '} */}
                {props.userData.username}
              </Text>
            </div>

            <S.FriendsQuantity>
              {/* <IoMdPeople size={24} style={{ color: 'rgba(51, 51, 51, 1)' }} /> */}
              <Text size="md" color="black">
                <strong style={{ fontWeight: '900', color: 'black' }}>0</strong>{' '}
                Seguidores{' '}
              </Text>
              <Text size="md" color="black">
                <strong style={{ fontWeight: '900', color: 'black' }}>0</strong>{' '}
                Segue{' '}
              </Text>
            </S.FriendsQuantity>

            {!isCurrentUserProfile && (
              <div
                style={{
                  marginTop: '1rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                {!token || !isLoggedIn ? (
                  <>
                    {' '}
                    <Dialog.Root open={isOpening} onOpenChange={setIsOpening}>
                      <Dialog.Trigger asChild>
                        <FollowButton
                          isAlreadyFollowing={isAlreadyFollowing}
                          onClick={handleFollow}
                        />
                      </Dialog.Trigger>
                      <LoginModal />
                    </Dialog.Root>
                  </>
                ) : (
                  <FollowButton
                    isAlreadyFollowing={isAlreadyFollowing}
                    onClick={handleFollow}
                  />
                )}

                <Tooltip content="Denunciar">
                  <Button
                    variant="lg"
                    rounding="rounded"
                    color="white"
                    backgroundColor="white"
                    style={{
                      padding: '0.65rem 1.5rem',
                      // width: '20%',
                    }}
                  >
                    <MdEmojiFlags size={24} style={{ color: '#b0b0b0' }} />
                  </Button>
                </Tooltip>
              </div>
            )}

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
                    {props.answersData.answers.length}
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
                  <S.hearthIconCSS></S.hearthIconCSS>
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
                <Link href={`/profile/${props.userData.id}/edit`}>
                  <S.EditButton
                    variant="lg"
                    rounding="rounded"
                    color="white"
                    backgroundColor="blue_500"
                    style={{
                      padding: '0.65rem 1.5rem',
                    }}
                  >
                    Editar
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
            <UserActivityTabs
              userId={props.userData.id}
              isActive={activeTab}
              setActive={setActiveTab}
            />
            <S.UserHistory>
              {props.answersData?.answers &&
              props.answersData?.answers.length > 0 ? (
                props.answersData?.answers.map((answer) => (
                  <QuestionCardProfile
                    author_id={answer.author_id}
                    avatarUrl={answer.author?.avatar_url}
                    author_name={String(props.userData.username)}
                    readOnly={true}
                    key={answer.id}
                    id={answer.question_id}
                    content={answer.content}
                    createdAt={answer.createdAt}
                    answeredText="respondeu"
                    questionAnswered={answer.question.content}
                    questionId={answer.question_id}
                    likesQuantity={answer.likes.length}
                    // subjectName={answer.category.name}
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
            {props.answersData?.answers.length >= 5 && (
              <S.ShowmoreQuestionsButtonContainer>
                <S.showMoreButton
                  rounding="rounded-thin"
                  backgroundColor="transparent"
                  border={false}
                >
                  Mostrar mais
                </S.showMoreButton>
              </S.ShowmoreQuestionsButtonContainer>
            )}
          </S.UserHistoryContainer>
        </S.ProfileContent>
      </S.ProfileContainer>
      <FloatingButton />
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

    try {
      const answersRes = await api.get(`/user-answers/${id}`)
      const answersData = answersRes.data

      return { props: { userData, answersData, id } }
    } catch (answersError: any) {
      if (answersError.response && answersError.response.status === 404) {
        return { props: { userData, answersData: null, id } }
      } else {
        console.error('Error fetching answers data:', answersError)
        return { props: { userData, answersData: null, id } }
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { props: { userData: null } }
  }
}
