import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'
import { BlankAvatar } from '@/components/atoms/Avatar/BlankAvatar'
import { IQuestion } from '@/shared/types'

export type subjectsType =
  | 'math'
  | 'biology'
  | 'history'
  | 'geography'
  | 'chemistry'
  | 'enem'
  | '6767497f-2929-4f97-92f6-2abef996b6f5'

interface MoreQuestionCardProps {
  question: IQuestion
  readOnly?: boolean
  answersQuantity?: number
}

export function MoreQuestonCard({
  question,
  readOnly = false,
  answersQuantity,
}: MoreQuestionCardProps) {
  const router = useRouter()

  const handleResponderClick = () => {
    router.push(`/tarefa/${question.id}`)
  }

  const answerCount = answersQuantity || 0

  const limitedContent =
    question.content.length > 80
      ? question.content.slice(0, 80) + '...'
      : question.content

  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.QuestionContent>
          <S.UserAvatarWrapper>
            <Avatar
              id={question.author_id}
              variant="sm"
              imageUrl={
                question.author.avatar_url ? question.author.avatar_url : null
              }
            />
          </S.UserAvatarWrapper>
          <S.QuestionInfo>
            <S.SubjectAndDateTimeContainer>
              <S.DateTime size="xs" color="gray_800">
                {getTimeAgo(question.createdAt)}
              </S.DateTime>
              <span>•</span>
              <Text
                size="xs"
                color="gray_800"
                style={{ fontFamily: 'Inter' }}
                weight="semibold"
              >
                {question.subject.name}
              </Text>
            </S.SubjectAndDateTimeContainer>
            {/* <S.QuestionText onClick={handleResponderClick}>
              {content.length > 142 ? content.slice(0, 142) + '...' : content}
            </S.QuestionText> */}
            <Text
              style={{
                fontFamily: 'Nunito',
                fontSize: '15px',
              }}
            >
              {limitedContent}
            </Text>
          </S.QuestionInfo>
        </S.QuestionContent>
        <S.UserHandleContainer>
          <S.AnswerQuantity>
            {readOnly ? (
              ''
            ) : (
              <Text
                weight="semibold"
                color="blue_950"
                size="sm"
                style={{
                  whiteSpace: 'nowrap',
                  fontFamily: 'Poppins',
                }}
              >
                {`${answerCount} respostas`}
              </Text>
            )}
          </S.AnswerQuantity>
          <S.AswerContainer>
            <S.AnswerButtonContainer>
              <S.AnswerButton
                backgroundColor="white"
                variant="sm"
                rounding="rounded-xxl"
                onClick={handleResponderClick}
              >
                {readOnly
                  ? 'VISUALIZAR'
                  : answerCount >= 3
                  ? 'VISUALIZAR'
                  : `RESPONDER + ${question.points} XP`}
              </S.AnswerButton>
            </S.AnswerButtonContainer>
          </S.AswerContainer>
        </S.UserHandleContainer>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
