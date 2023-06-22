import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { QuestionContext } from '@/contexts/QuestionsContext'
import { useContextSelector } from 'use-context-selector'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'

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
}

export function QuestionCard({ id, content, category, createdAt }: Question) {
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  const router = useRouter()

  const handleResponderClick = () => {
    router.push(`/question/${id}`)
  }

  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.QuestionContent>
          <S.UserAvatarContainer>
            <Image
              src="https://avatars.githubusercontent.com/u/70654718?v=4"
              alt=""
              width={48}
              height={48}
              style={{ borderRadius: '50%' }}
            />
          </S.UserAvatarContainer>
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
          <S.AswerContainer>
            <S.AnswerButtonContainer>
              <S.AnswerButton
                backgroundColor="white"
                variant="sm"
                onClick={handleResponderClick}
              >
                RESPONDER
              </S.AnswerButton>
            </S.AnswerButtonContainer>
          </S.AswerContainer>
          <S.AnswerQuantity>
            <Text
              weight="semibold"
              color="blue_550"
              style={{ whiteSpace: 'nowrap', fontFamily: 'Poppins' }}
            >
              {questions.filter((question) => question.id === id)[0]?.answers
                .length > 0
                ? `${
                    questions.filter((question) => question.id === id)[0]
                      ?.answers.length
                  } ${
                    questions.filter((question) => question.id === id)[0]
                      ?.answers.length > 1
                      ? 'respostas'
                      : 'resposta'
                  }`
                : 'Seja o primeiro a responder'}
            </Text>
          </S.AnswerQuantity>
        </S.UserHandleContainer>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
