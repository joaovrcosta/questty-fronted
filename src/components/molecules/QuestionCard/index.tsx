import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'

export type subjectsType =
  | 'math'
  | 'biology'
  | 'history'
  | 'geography'
  | 'chemistry'
  | 'enem'
  | '6767497f-2929-4f97-92f6-2abef996b6f5'

interface Question {
  id: string
  content: string
  category_id: string
  createdAt: string
  readOnly?: boolean
}

export function QuestionCard({
  id,
  content,
  category_id,
  createdAt,
  readOnly = false,
}: Question) {
  const questions = useQuestionsStore((state) => state.questions)

  const router = useRouter()

  const handleResponderClick = () => {
    router.push(`/tarefa/${id}`)
  }

  const answerCount = 0
  // const answerCount = questions?.filter((question) => question.id === id)[0]
  //   ?.answers.length
  const hasThreeOrMoreAnswers = answerCount >= 3
  const limitedAnswerCount = Math.min(answerCount, 3)

  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.QuestionContent>
          <S.UserAvatarWrapper>
            <Avatar
              variant="lg"
              imageUrl="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            />
          </S.UserAvatarWrapper>
          <S.QuestionInfo>
            <S.QuestionText onClick={handleResponderClick}>
              {content.length > 142 ? content.slice(0, 142) + '...' : content}
            </S.QuestionText>
            <S.SubjectAndDateTimeContainer>
              <S.Subject size="xs" color="gray_800">
                {category_id}
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
                  : 'Seja o primeiro(a)'}
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
