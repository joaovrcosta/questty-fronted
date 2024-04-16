import * as S from '@/styles/pages/profile/answers'
import { Text } from '@/components/atoms/Text'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import Cookies from 'js-cookie'
import api from '@/services/api'
import { IProfileData } from '@/shared/types'
import { useProfileStore } from '@/features/stores/profile/useProfileStore'
import { useEffect, useState } from 'react'
import { UserActivityTabs } from '@/components/molecules/UserActivity'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import { QuestionCardProfile } from '@/components/Cards/QuestionCardProfile'
import handleFollowUser from '@/utils/handle/handleFollowUser'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { UserInfo } from '@/components/organisms/UserInfo'

export default function Answers(props: IProfileData) {
  const [activeTab, setActiveTab] = useState('answers')
  const { isLoggedIn, token } = useAuthStore()
  const { setProfile } = useProfileStore()
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

  const rank = props.userData.rank

  console.log(props.answersData?.answers)

  return (
    <>
      <NextSeo
        title={usernameDisplay}
        description="O Questty é a plataforma onde estudantes e especialistas convergem para desvendar os enigmas acadêmicos mais desafiadores, criando uma comunidade dinâmica de aprendizado colaborativo."
      />

      <S.ProfileContainer>
        <S.ProfileContent isLoggedIn={isLoggedIn}>
          <UserInfo data={props} />
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
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
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
                  </motion.div>
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
