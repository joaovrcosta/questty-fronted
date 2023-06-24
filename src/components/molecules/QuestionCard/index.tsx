import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { QuestionContext } from '@/contexts/QuestionsContext'
import { useContextSelector } from 'use-context-selector'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'

export type subjectsType =
  | 'math'
  | 'biology'
  | 'history'
  | 'geography'
  | 'chemistry'
  | 'enem'

interface Question {
  id: number
  content: string
  category: subjectsType
  createdAt: string
  readOnly?: boolean
}

export function QuestionCard({
  id,
  content,
  category,
  createdAt,
  readOnly = false,
}: Question) {
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  const router = useRouter()

  const handleResponderClick = () => {
    router.push(`/question/${id}`)
  }

  const answerCount = questions.filter((question) => question.id === id)[0]
    ?.answers.length
  const hasThreeOrMoreAnswers = answerCount >= 3
  const limitedAnswerCount = Math.min(answerCount, 3)

  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.QuestionContent>
          <S.UserAvatarWrapper>
            <Avatar
              variant="lg"
              imageUrl="https://avatars.githubusercontent.com/u/70654718?v=4"
            />
          </S.UserAvatarWrapper>
          <S.QuestionInfo>
            <S.QuestionText>
              {content.length > 142 ? content.slice(0, 142) + '...' : content}
            </S.QuestionText>
            <S.SubjectAndDateTimeContainer>
              <S.Subject size="xs" color="gray_800">
                {category}
              </S.Subject>
              <S.DateTime size="xs" color="gray_800">
                {getTimeAgo(createdAt)}
              </S.DateTime>
            </S.SubjectAndDateTimeContainer>
          </S.QuestionInfo>
        </S.QuestionContent>
        <S.UserHandleContainer>
          <S.AnswerQuantity>
            {readOnly ? (
              ''
            ) : (
              <Text
                weight="semibold"
                color="blue_550"
                size="sm"
                style={{ whiteSpace: 'nowrap', fontFamily: 'Poppins' }}
              >
                {answerCount > 0
                  ? `${limitedAnswerCount} ${
                      limitedAnswerCount > 1 ? 'respostas' : 'resposta'
                    }`
                  : 'Seja o primeiro(a) a responder'}
              </Text>
            )}
          </S.AnswerQuantity>
          <S.AswerContainer>
            <S.AnswerButtonContainer>
              <S.AnswerButton
                backgroundColor="white"
                variant="sm"
                onClick={handleResponderClick}
              >
                {readOnly ? 'VISUALIZAR' : 'RESPONDER'}
              </S.AnswerButton>
            </S.AnswerButtonContainer>
          </S.AswerContainer>
        </S.UserHandleContainer>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
