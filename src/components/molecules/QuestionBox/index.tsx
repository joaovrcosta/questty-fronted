import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { AiOutlineFlag, AiOutlinePlusCircle, AiFillEye } from 'react-icons/ai'
import { Avatar } from '@/components/atoms/Avatar'
import { getFormattedDateAndTime } from '@/utils/getTimeAgo'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { AnswerModal } from '../AnswerModal'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Tooltip } from '../Tooltip'
import { useAnswerModalStore } from '@/features/stores/answerQuestionModal/useAnswerQuestionModal'
import { useEffect, useState } from 'react'
import { SkeletonLine } from '@/components/atoms/Skeleton'
import { LoginModal } from '../LoginModal'
import { CommentBox } from '../CommentBox'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { MdOutlineSend } from 'react-icons/md'
import { Spinner } from '@/components/atoms/Spinner'
import { IComment } from '@/shared/types'
import { Button } from '@/components/atoms/Button'
import { useAuthModalStore } from '@/features/stores/authModal/authModal'

interface Question {
  id?: number | string
  content?: string
  createdAt?: string
  answersQuantity?: number
  author?: string
  avatarUrl?: string
}

interface FormData {
  content: string
  oneOfFields: {
    questionId: string
    answerId: string | null
  }
  categoryType: string
}

const CommentFormSchema = zod.object({
  content: zod
    .string()
    .min(2, 'Comentário deve ter entre 2 a 500 caracteres.')
    .max(500, 'Comentário deve ter entre 2 a 500 caracteres.')
    .refine(
      (content) => {
        const words = content.split(/\s+/)
        return !words.some((word) => word.length > 46)
      },
      {
        message: 'Nenhuma palavra deve ter mais de 46 letras.',
        path: ['content'],
      }
    ),
})

export function QuestionBox({
  id,
  content,
  author,
  createdAt,
  answersQuantity,
  avatarUrl,
}: Question) {
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(CommentFormSchema),
  })
  const { isSubmitting } = formState
  const [loading, setLoading] = useState(true)
  const [showAllComments, setShowAllComments] = useState(false)
  const { question } = useQuestionStore()
  const { user, isLoggedIn, token } = useAuthStore()
  const router = useRouter()
  const { isOpen, setIsOpen } = useAnswerModalStore()
  const { isOpening, setIsOpening } = useAuthModalStore()
  const largeText = content?.substring(0, 380)
  const normalText = content?.substring(380)

  useEffect(() => {
    if (question === null) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  })

  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    setComments(question?.questionData?.comments ?? [])
  }, [question])

  const isAuthor = question?.questionData?.author_id === user?.id

  const isAlreadyAnsweredByUser =
    Array.isArray(question?.questionData?.answers) &&
    question?.questionData.answers.some(
      (answer) => answer.author_id === user?.id
    )

  const hasThreeAnswers =
    Array.isArray(question?.questionData?.answers) &&
    question?.questionData.answers.length === 3

  const MAX_DISPLAY_COMMENTS = 3

  const commentsToDisplay = showAllComments
    ? comments
    : comments.slice(0, MAX_DISPLAY_COMMENTS)

  const handleCreateNewComment = async (data: FormData) => {
    try {
      if (!token || !isLoggedIn) {
        await router.push('/signin')
        return
      }

      const response = await api.post('/comment', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 200) {
        const newCommentData = response.data.comment
        setComments((prevComments) => [newCommentData, ...prevComments])
        reset()
      } else if (response.status === 400) {
        console.log('Pergunta já respondida')
      }
    } catch (error) {
      console.error('Error creating comment:', error)
      throw error
    }
  }

  return (
    <S.QuestionWrapper>
      <S.AvatarContainer>
        <Avatar
          id={String(question?.questionData?.author_id)}
          variant="lg"
          imageUrl={avatarUrl ? avatarUrl : null}
        />
      </S.AvatarContainer>
      <S.QuestionBoxContainer isLoggedIn={isLoggedIn}>
        <S.QuestionInfo>
          <S.QuestionInfoWrapper>
            <S.AvatarInfoContainer>
              <Avatar
                id={String(question?.questionData?.author_id)}
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
        {!isAuthor && !isAlreadyAnsweredByUser && (
          <S.UserHandleActionsContainer>
            {hasThreeAnswers ? (
              <a href="#respostas">
                <S.SeeAnswerButton
                  variant="lg"
                  rounding="rounded-full"
                  color="white"
                  backgroundColor="black"
                >
                  <AiFillEye size={24} />
                  <Text color="white" weight="medium">
                    VER {answersQuantity} RESPOSTAS
                  </Text>
                </S.SeeAnswerButton>
              </a>
            ) : loading ? (
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div>
                  <SkeletonLine
                    width={29}
                    rows={3}
                    height={10}
                    rounding="rounded"
                  />
                </div>
                <div>
                  <SkeletonLine
                    width={30}
                    rows={3}
                    height={10}
                    rounding="rounded"
                  />
                </div>
              </div>
            ) : !token || !isLoggedIn ? (
              <Dialog.Root open={isOpening} onOpenChange={setIsOpening}>
                <Dialog.Trigger asChild>
                  <S.AnswerButton
                    variant="lg"
                    rounding="rounded-full"
                    color="white"
                    backgroundColor="black"
                  >
                    <AiOutlinePlusCircle size={24} />
                    RESPONDER
                  </S.AnswerButton>
                </Dialog.Trigger>
                <LoginModal />
              </Dialog.Root>
            ) : (
              <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Trigger asChild>
                  <S.AnswerButton
                    variant="lg"
                    rounding="rounded-full"
                    color="white"
                    backgroundColor="black"
                  >
                    <AiOutlinePlusCircle size={24} />
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
          <S.CommentForm
            onSubmit={handleSubmit(async (data) => {
              const formData = {
                content: data.content,
                oneOfFields: {
                  questionId: question?.questionData.id ?? '',
                  answerId: null,
                },
                categoryType: 'question',
              }

              await handleCreateNewComment(formData)
            })}
          >
            <S.MoreDetailsInput
              {...register('content')}
              placeholder={`Pedir detalhes ao usuário ${author}`}
            />
            {isSubmitting ? (
              <Spinner size="md" baseColor="blue_950" variant="secondary" />
            ) : (
              <S.SendButton type="submit">
                <MdOutlineSend size={16} />
              </S.SendButton>
            )}
          </S.CommentForm>
        </S.MoreDetailsInputContainer>
        {formState.errors.content && (
          <div style={{ marginTop: '1.5rem' }}>
            <span
              style={{
                color: '#D20032',
                fontFamily: 'Poppins',
                fontWeight: 300,
              }}
            >
              {formState.errors.content.message}
            </span>
          </div>
        )}
        <>
          <S.CommentSection>
            {commentsToDisplay.map((comment) => (
              <CommentBox
                key={comment.id}
                id={comment.id}
                answer_id={comment.answer_id}
                author_id={comment.author_id}
                content={comment.content}
                createdAt={comment.createdAt}
                question_id={comment.question_id}
                avatar_url={comment.author ? comment.author.avatar_url : ''}
              />
            ))}
          </S.CommentSection>

          {comments.length > MAX_DISPLAY_COMMENTS && !showAllComments && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1rem',
              }}
            >
              <Button
                onClick={() => setShowAllComments(true)}
                backgroundColor="transparent"
                border={false}
              >
                VER MAIS COMENTÁRIOS
              </Button>
            </div>
          )}
        </>
      </S.QuestionBoxContainer>
    </S.QuestionWrapper>
  )
}
