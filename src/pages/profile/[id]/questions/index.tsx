import * as S from '@/styles/pages/profile/questions'
import { Text } from '@/components/atoms/Text'
import { QuestionCard } from '@/components/Cards/QuestionCard'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { PiMedalFill } from 'react-icons/pi'
import api from '@/services/api'
import { IProfileData } from '@/shared/types'
import { useProfileStore } from '@/features/stores/profile/useProfileStore'
import { useEffect, useState } from 'react'
import { getDayOfYear } from '@/utils/getDayOfYear'
import Link from 'next/link'
import { MdEmojiFlags, MdQuestionAnswer } from 'react-icons/md'
import Head from 'next/head'
import { UserActivityTabs } from '@/components/molecules/UserActivity'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import { IoMdPersonAdd } from 'react-icons/io'
import { Button } from '@/components/atoms/Button'
import { Tooltip } from '@/components/molecules/Tooltip'
import { QuestionCardProfile } from '@/components/Cards/QuestionCardProfile'
import handleFollowUser from '@/utils/handle/handleFollowUser'
import { FollowButton } from '@/components/molecules/FollowButton'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { UserInfo } from '@/components/organisms/UserInfo'

export default function Questions(props: IProfileData) {
  const router = useRouter()
  const { isLoggedIn, token } = useAuthStore()
  const { setProfile, user } = useProfileStore()
  const authenticatedUser = useAuthStore((state) => state.user)

  const [activeTab, setActiveTab] = useState('questions')

  const isCurrentUserProfile = authenticatedUser?.id === props.userData.id
  const [isAlreadyFollowing, setIsAlreadyFollowing] = useState(false)

  const usernameDisplay = `${props.userData.username} | Questty.com`

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
          <UserInfo data={props} />
          <S.UserHistoryContainer>
            <UserActivityTabs
              userId={props.userData.id}
              isActive={activeTab}
              setActive={setActiveTab}
            />
            <S.UserHistory>
              {props.userData?.questions &&
              props.userData.questions.length > 0 ? (
                props.userData.questions.map((question) => (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <QuestionCardProfile
                      author_id={question.author_id}
                      avatarUrl={question.author?.avatar_url}
                      author_name={question.author?.username}
                      readOnly={true}
                      key={question.id}
                      id={question.id}
                      content={question.content}
                      createdAt={question.createdAt}
                      // likesQuantity={question}
                      answeredText="perguntou em"
                    />
                  </motion.div>
                ))
              ) : (
                <S.NotFindAnyAnswer>
                  <Text size="md" color="gray_500">
                    Nenhuma pergunta encontrada.
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

    return { props: { userData, id } }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { userData: null } }
  }
}
