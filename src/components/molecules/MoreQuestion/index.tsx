import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'
import { BlankAvatar } from '@/components/atoms/Avatar/BlankAvatar'

export type subjectsType =
  | 'math'
  | 'biology'
  | 'history'
  | 'geography'
  | 'chemistry'
  | 'enem'
  | '6767497f-2929-4f97-92f6-2abef996b6f5'

interface Question {
  id?: string
  author_id?: string
  content: string
  category_id?: string
  createdAt?: string
  readOnly?: boolean
  answersQuantity?: number
  subjectName: string
  points: number
  avatar_url: string
}

export function MoreQuestonCard({
  id,
  author_id,
  content,
  category_id,
  answersQuantity,
  createdAt,
  subjectName,
  points,
  avatar_url,
  readOnly = false,
}: Question) {
  const router = useRouter()

  const handleResponderClick = () => {
    router.push(`/tarefa/${id}`)
  }

  const answerCount = answersQuantity || 0

  const limitedContent =
    content.length > 80 ? content.slice(0, 80) + '...' : content

  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.QuestionContent>
          <S.UserAvatarWrapper>
            <Avatar
              id={author_id}
              variant="sm"
              imageUrl={avatar_url ? avatar_url : null}
            />
          </S.UserAvatarWrapper>
          <S.QuestionInfo>
            <S.SubjectAndDateTimeContainer>
              {!!category_id && (
                <S.Subject size="xs" color="gray_800">
                  {category_id}
                </S.Subject>
              )}
              <S.DateTime size="xs" color="gray_800">
                {getTimeAgo(createdAt)}
              </S.DateTime>
              <span>•</span>
              <Text
                size="xs"
                color="gray_800"
                style={{ fontFamily: 'Inter' }}
                weight="semibold"
              >
                {subjectName}
              </Text>
            </S.SubjectAndDateTimeContainer>
            {/* <S.QuestionText onClick={handleResponderClick}>
              {content.length > 142 ? content.slice(0, 142) + '...' : content}
            </S.QuestionText> */}
            <Text
              style={{
                fontFamily: 'ProximaNova',
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
                  : `RESPONDER + ${points} XP`}
              </S.AnswerButton>
            </S.AnswerButtonContainer>
          </S.AswerContainer>
        </S.UserHandleContainer>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
