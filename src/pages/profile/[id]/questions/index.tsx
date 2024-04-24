import * as S from '@/styles/pages/profile/questions'
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
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { UserInfo } from '@/components/organisms/UserInfo'

export default function Questions(props: IProfileData) {
  const { isLoggedIn } = useAuthStore()
  const { setProfile } = useProfileStore()

  const [activeTab, setActiveTab] = useState('questions')

  const usernameDisplay = `${props.userData.username} | Questty.com`

  useEffect(() => {
    setProfile(props)
  }, [props])

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
