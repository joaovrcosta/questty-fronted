import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/profile'
import { Avatar } from '@/components/atoms/Avatar'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { useContextSelector } from 'use-context-selector'
import { QuestionContext } from '@/contexts/QuestionsContext'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'

export default function Profile() {
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

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
              joaovrcosta
            </Text>
            <S.UserEditing>
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
                    10 de fevereiro de 2021
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
              {questions.map((question) => {
                return (
                  <QuestionCard
                    readOnly={true}
                    key={question.id}
                    id={question.id}
                    content={question.content}
                    category={question.category}
                    createdAt={question.createdAt}
                  />
                )
              })}
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
    </>
  )
}
