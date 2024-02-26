import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { useRouter } from 'next/router'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { Avatar } from '@/components/atoms/Avatar'
import starIcon from '@/assets/star.svg'
import Image from 'next/image'
import { GiRoundStar } from 'react-icons/gi'
import { SiCrystal } from 'react-icons/si'
import { Tooltip } from '../../molecules/Tooltip'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { Button } from '@/components/atoms/Button'
import { IoFlagOutline } from 'react-icons/io5'
import { AiOutlineFlag } from 'react-icons/ai'
import * as Dialog from '@radix-ui/react-dialog'
import { useReportQuestionStore } from '@/features/stores/modals-stores/reportQuestionModal/userReportQuestionModal'
import { ReportQuestionModal } from '@/components/modals/ReportQuestionModal'

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
}: Question) {
  const router = useRouter()
  const { isOpening, setIsOpening } = useReportQuestionStore()

  const handleResponderClick = () => {
    router.push(`/tarefa/${id}`)
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
                    <S.Subject size="xs" color="gray_800">
                      {category_id}
                    </S.Subject>
                  )}{' '}
                  •{' '}
                  <S.DateTime size="xs" color="gray_800">
                    {getTimeAgo(createdAt)}
                  </S.DateTime>
                </S.SubjectAndDateTimeContainer>
              </S.UserInfo>
              <Tooltip content="Cristais">
                <S.QuestionPoints>
                  <S.StarContainer>
                    <SiCrystal size={14} color="#fff" />
                  </S.StarContainer>
                  <S.StarQuantity>
                    <Text
                      weight="medium"
                      color="blue_950"
                      size="sm"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      +
                    </Text>{' '}
                    <Text
                      weight="semibold"
                      size="sm"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      0
                    </Text>{' '}
                    <Text
                      weight="medium"
                      size="sm"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      pts
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
              <Tooltip content="Denunciar">
                <S.ReportButtonContainer>
                  <Dialog.Root open={isOpening} onOpenChange={setIsOpening}>
                    <Dialog.Trigger asChild>
                      <S.ReportButton>
                        <AiOutlineFlag size={20} color="#000" />
                      </S.ReportButton>
                    </Dialog.Trigger>
                    <ReportQuestionModal />
                  </Dialog.Root>
                </S.ReportButtonContainer>
              </Tooltip>
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
