import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { AiOutlineFlag } from 'react-icons/ai'
import { PlusCircle, Eye } from '@phosphor-icons/react'
import { Avatar } from '@/components/atoms/Avatar'
import { getFormattedDateAndTime, getTimeAgo } from '@/utils/getTimeAgo'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { AnswerModal } from '../AnswerModal'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useQuestionModalStore } from '@/features/stores/newQuestionModal/useNewQuestionModal'
import { Tooltip } from '../Tooltip'
import { useAnswerModalStore } from '@/features/stores/answerQuestionModal/useAnswerQuestionModal'

interface Question {
  id?: number | string
  content?: string
  createdAt?: string
  answersQuantity?: number
  author?: string
  avatarUrl?: string
}

export function QuestionBox({
  id,
  content,
  author,
  createdAt,
  answersQuantity,
  avatarUrl,
}: Question) {
  const { question } = useQuestionStore()
  const { user, isLoggedIn } = useAuthStore()
  const { isOpen, setIsOpen } = useAnswerModalStore()
  const largeText = content?.substring(0, 380)
  const normalText = content?.substring(380)

  const isAuthor = question?.questionData.author_id === user?.id

  const isAlreadyAnsweredByUser = ''

  const hasThreeAnswers =
    Array.isArray(question?.questionData.answers) &&
    question?.questionData.answers.length === 3

  return (
    <S.QuestionWrapper>
      <S.AvatarContainer>
        <Avatar
          id={String(question?.questionData.author_id)}
          variant="lg"
          imageUrl={avatarUrl ? avatarUrl : null}
        />
      </S.AvatarContainer>
      <S.QuestionBoxContainer isLoggedIn={isLoggedIn}>
        <S.QuestionInfo>
          <S.QuestionInfoWrapper>
            <S.AvatarInfoContainer>
              <Avatar
                id=""
                variant="lg"
                imageUrl={avatarUrl ? avatarUrl : null}
              />
            </S.AvatarInfoContainer>
            <S.InfoWrapperr>
              <S.UserInfo>
                <S.Username>
                  <Text style={{ fontFamily: 'Poppins' }} weight="medium">
                    {author}
                  </Text>
                </S.Username>
                <S.UserLevel>0</S.UserLevel>
              </S.UserInfo>
              <S.DateTimeText
                size="xs"
                weight="regular"
                style={{ fontFamily: 'Inter' }}
              >
                {getFormattedDateAndTime(createdAt)}
              </S.DateTimeText>
            </S.InfoWrapperr>
          </S.QuestionInfoWrapper>

          {hasThreeAnswers ? (
            <Link href="/">
              <S.BackButtonBox>
                <AiOutlineArrowLeft size={24} />
              </S.BackButtonBox>
            </Link>
          ) : (
            <S.AnswerQuantityBox>
              <div id="answers">
                <Text
                  weight="bold"
                  size="xl"
                  color="blue_950"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Respostas:
                </Text>
              </div>
              <S.AnswerQuantity>
                <Text
                  size="xx1"
                  weight="bold"
                  color="blue_950"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {answersQuantity}
                </Text>
              </S.AnswerQuantity>
            </S.AnswerQuantityBox>
          )}
        </S.QuestionInfo>
        <S.QuestionContent>
          <S.QuestionTitle>
            <S.QuestionTitleText
              size="xx1"
              weight="bold"
              color="blue_950"
            ></S.QuestionTitleText>
          </S.QuestionTitle>
          <S.ContentContainer>
            <Text size="xl" color="blue_950" weight="semibold">
              {largeText}
            </Text>
            <Text
              color="blue_950"
              style={{ marginTop: '1rem', lineHeight: '24px' }}
            >
              {normalText}
            </Text>
          </S.ContentContainer>
        </S.QuestionContent>
        {!isAuthor && (
          <S.UserHandleActionsContainer>
            {hasThreeAnswers ? (
              <a href="#respostas">
                <S.SeeAnswerButton
                  variant="lg"
                  rounding="rounded-full"
                  color="white"
                  backgroundColor="black"
                >
                  <Eye size={24} weight="bold" />
                  <Text color="white" weight="medium">
                    VER {answersQuantity} RESPOSTAS
                  </Text>
                </S.SeeAnswerButton>
              </a>
            ) : (
              <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                  <S.AnswerButton
                    variant="lg"
                    rounding="rounded-full"
                    color="white"
                    backgroundColor="black"
                  >
                    <PlusCircle size={24} weight="bold" />
                    RESPONDER
                  </S.AnswerButton>
                </Dialog.Trigger>
                <AnswerModal id={String(question?.questionData?.author_id)} />
              </Dialog.Root>
            )}
            <S.ModerationWrapper>
              <Tooltip content="Denunciar">
                <S.ModerateLabel>
                  <AiOutlineFlag size={24} color="#10162f" />
                </S.ModerateLabel>
              </Tooltip>
            </S.ModerationWrapper>
          </S.UserHandleActionsContainer>
        )}

        <S.MoreDetailsInputContainer>
          <Avatar
            variant="sm"
            imageUrl={user?.avatar_url ? user?.avatar_url : null}
          />
          <S.MoreDetailsInput
            placeholder={`Pedir detalhes ao usuario ${author}`}
          />
        </S.MoreDetailsInputContainer>
      </S.QuestionBoxContainer>
    </S.QuestionWrapper>
  )
}
