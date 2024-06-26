import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/router'
import { getFormattedDateAndTime } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'
import { Tooltip } from '@/components/molecules/Tooltip'

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
  author_id?: string
  author_name?: string
  content: string
  category_id?: string
  createdAt: string
  readOnly?: boolean
  answersQuantity?: number
  avatarUrl?: string
  answeredText?: string
  subjectName?: string
  questionAnswered?: string
  questionId?: string
  likesQuantity?: number
}

export function QuestionCardProfile({
  id,
  author_id,
  content,
  author_name,
  answersQuantity,
  createdAt,
  readOnly = false,
  avatarUrl,
  answeredText,
  subjectName,
  questionAnswered,
  questionId,
  likesQuantity,
}: Question) {
  const router = useRouter()

  const handleResponderClick = () => {
    router.push(`/tarefa/${id}`)
  }

  if (questionAnswered && questionAnswered?.length > 55) {
    questionAnswered = questionAnswered?.substring(0, 55) + '...'
  }

  const answerCount = answersQuantity || 0

  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.Wrapper>
          <S.QuestionContent>
            <S.QuestionInfo>
              <S.UserInfo>
                <S.UserAvatarWrapper>
                  <Avatar
                    id={author_id}
                    variant="sm"
                    imageUrl={avatarUrl ? avatarUrl : null}
                  />
                </S.UserAvatarWrapper>
                <div>
                  <S.SubjectAndDateTimeContainer>
                    <Text size="xs" color="blue_950">
                      <strong>{author_name}</strong> {answeredText}{' '}
                      <strong>
                        <S.FollowQuestionLink href={`/tarefa/${questionId}`}>
                          {questionAnswered}
                        </S.FollowQuestionLink>
                      </strong>
                    </Text>
                  </S.SubjectAndDateTimeContainer>
                  <div>
                    <S.DateTime size="xs" color="gray_800">
                      {getFormattedDateAndTime(createdAt)}
                    </S.DateTime>
                    <Text size="xs" weight="semibold">
                      {subjectName}
                    </Text>
                  </div>
                </div>
              </S.UserInfo>
            </S.QuestionInfo>
            <S.QuestionTextContainer>
              <S.QuestionText onClick={handleResponderClick}>
                {content.length > 142 ? content.slice(0, 142) + '...' : content}
              </S.QuestionText>
            </S.QuestionTextContainer>
          </S.QuestionContent>
          <S.UserHandleContainer>
            {/* <Tooltip content="Respostas">
              <S.AnswerQuantityWrapper>
                <S.AnswerQuantity>
                  {readOnly ? (
                    ''
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                    >
                      <HiOutlineChatAlt2 size={20} />
                    </div>
                  )}
                </S.AnswerQuantity>
                <Text>{answerCount}</Text>
              </S.AnswerQuantityWrapper>
            </Tooltip> */}
            <Tooltip content="Curtidas">
              <S.LikesContainer>
                {/* <hearthIconCSS */}
                <S.hearthIconCSS></S.hearthIconCSS>
                <Text weight="bold">{likesQuantity ?? 0}</Text>
              </S.LikesContainer>
            </Tooltip>
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
                    : 'RESPONDER'}
                </S.AnswerButton>
              </S.AnswerButtonContainer>
            </S.AswerContainer>
          </S.UserHandleContainer>
        </S.Wrapper>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
