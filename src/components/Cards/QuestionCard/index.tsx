import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'
import { SiCrystal } from 'react-icons/si'
import { Tooltip } from '../../molecules/Tooltip'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { AiFillFlag, AiOutlineFlag } from 'react-icons/ai'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useReportQuestionHomeStore } from '@/features/stores/modals-stores/reportQuestionHomeModal'
import { ReportQuestionHomeModal } from '@/components/modals/ReportQuestionHomeModal'
import xpIcon from '@/assets/icons/xp.svg'
import Image from 'next/image'
import useAuthStore from '@/features/stores/auth/useAuthStore'

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
  content: string
  category_id?: string
  createdAt: string
  readOnly?: boolean
  answersQuantity?: number
  avatarUrl?: string
  points?: number
  isReported?: boolean
}

export function QuestionCard({
  id,
  author_id,
  content,
  category_id,
  answersQuantity,
  createdAt,
  readOnly = false,
  avatarUrl,
  points,
  isReported,
}: Question) {
  const router = useRouter()
  const { user } = useAuthStore()
  const [currentEntityId, setCurrentEntityId] = useState<string | null>(null)
  const { isOpening, setIsOpening, questions } = useReportQuestionHomeStore()

  const isQuestionReported = questions.includes(id)
  const isAuthor = author_id === user?.id

  const handleResponderClick = () => {
    router.push(`/tarefa/${id}`)
  }

  const handleReportClick = () => {
    setCurrentEntityId(id)
    setIsOpening(true)
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
                <S.SubjectAndDateTimeContainer>
                  {!!category_id && (
                    <S.Subject size="xs" color="blue_950">
                      {category_id}
                    </S.Subject>
                  )}{' '}
                  •{' '}
                  <S.DateTime size="xs" color="gray_800">
                    {getTimeAgo(createdAt)}
                  </S.DateTime>
                </S.SubjectAndDateTimeContainer>
              </S.UserInfo>
              <Tooltip
                content={`Respondendo essa pergunta você ganha ${points} XP`}
              >
                <S.QuestionPoints>
                  <S.StarContainer>
                    <Image src={xpIcon} alt="" height={24} />
                  </S.StarContainer>
                  <S.StarQuantity>
                    <Text
                      weight="medium"
                      color="blue_950"
                      size="md"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      +
                    </Text>{' '}
                    <Text
                      weight="extrabold"
                      size="lg"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {points}
                    </Text>{' '}
                    <Text
                      weight="extrabold"
                      size="sm"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      XP
                    </Text>{' '}
                  </S.StarQuantity>
                </S.QuestionPoints>
              </Tooltip>
            </S.QuestionInfo>
            <S.QuestionTextContainer>
              <S.QuestionText onClick={handleResponderClick}>
                {content.length > 142 ? content.slice(0, 142) + '...' : content}
              </S.QuestionText>
            </S.QuestionTextContainer>
          </S.QuestionContent>
          <S.UserHandleContainer>
            <Tooltip content="Respostas">
              <S.AnswerQuantityWrapper>
                <S.AnswerQuantity onClick={handleResponderClick}>
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
            </Tooltip>
            <S.AswerContainer>
              {!isAuthor ? (
                <div>
                  {isReported || isQuestionReported ? (
                    <Tooltip content="Em moderação">
                      <S.ReportedButton style={{ color: '#D20032' }}>
                        <AiFillFlag size={20} color="#D20032" />
                      </S.ReportedButton>
                    </Tooltip>
                  ) : (
                    <Tooltip content="Denunciar">
                      <S.ReportButtonContainer>
                        <Dialog.Root
                          open={currentEntityId === id && isOpening}
                          onOpenChange={setIsOpening}
                        >
                          <Dialog.Trigger asChild>
                            <S.ReportButton onClick={handleReportClick}>
                              <AiOutlineFlag size={20} color="#000" />
                            </S.ReportButton>
                          </Dialog.Trigger>
                          <ReportQuestionHomeModal
                            entityType="QUESTION"
                            entityId={id}
                          />
                        </Dialog.Root>
                      </S.ReportButtonContainer>
                    </Tooltip>
                  )}
                </div>
              ) : null}
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
                    : `RESPONDER`}
                </S.AnswerButton>
              </S.AnswerButtonContainer>
            </S.AswerContainer>
          </S.UserHandleContainer>
        </S.Wrapper>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
