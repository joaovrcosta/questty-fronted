import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { AiOutlineFlag, AiFillFlag } from 'react-icons/ai'
import { Avatar } from '@/components/atoms/Avatar'
import { getFormattedDateAndTime } from '@/utils/getTimeAgo'
import Link from 'next/link'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Tooltip } from '../../molecules/Tooltip'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import { useEffect, useState } from 'react'
import { SkeletonLine } from '@/components/atoms/Skeleton'
import { CommentBox } from '../CommentBox'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { MdOutlineSend } from 'react-icons/md'
import { Spinner } from '@/components/atoms/Spinner'
import { IComment } from '@/shared/types'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { withSession } from '@/lib/with-session'
import { AnswerMobileEditor } from '@/components/page/tarefa/AnswerMobileEditor'
import { AnswerButton } from '@/components/page/tarefa/AnswerButton'
import { FiCheckCircle } from 'react-icons/fi'
import { useReportQuestionStore } from '@/features/stores/modals-stores/reportQuestionModal/userReportQuestionModal'
import * as Dialog from '@radix-ui/react-dialog'
import { ReportQuestionModal } from '@/components/modals/ReportQuestionModal'
import { CommentFormSchema } from '@/utils/zodSchemas'

interface QuestionBoxProps {
  id?: number | string
  content?: string
  createdAt?: string
  answersQuantity?: number
  author?: string
  avatarUrl?: string
  isMobile: boolean
  authorId: string
  points: number
  authorLevel: number
  isReported: boolean

  hasAnswered: any
  subject: string
}

interface FormData {
  content: string
  oneOfFields: {
    questionId: string
    answerId: string | null
  }
  categoryType: string
}

export function QuestionBox({
  id,
  content,
  author,
  authorId,
  createdAt,
  answersQuantity,
  avatarUrl,
  isMobile,
  hasAnswered,
  subject,
  points,
  authorLevel,
  isReported,
}: QuestionBoxProps) {
  const { register, handleSubmit, formState, reset } = useForm<FormData>({
    resolver: zodResolver(CommentFormSchema),
  })
  const { isSubmitting } = formState
  const [loading, setLoading] = useState(true)
  const [currentEntityId, setCurrentEntityId] = useState<string | null>(null)

  const [showAllComments, setShowAllComments] = useState(false)
  const { question } = useQuestionStore()
  const { user, token, isLoggedIn } = useAuthStore()
  const { isOpening, setIsOpening, isModerated } = useReportQuestionStore()
  const router = useRouter()

  const {
    isAnswering,
    isAnsweringMobile,
    setIsAnsweringMobile,
    setIsAlreadyAnswered,
    alreadyAnswered,
  } = useAnswerModalStore()

  let largeText = ''
  let normalText = ''

  if (content) {
    const maxLengthLarge = 182
    const maxLengthNormal = 345

    if (content.length <= maxLengthNormal) {
      normalText = content
    } else {
      if (content.length <= maxLengthLarge) {
        largeText = content
      } else {
        const splitIndex = content.lastIndexOf(' ', maxLengthLarge)
        if (splitIndex !== -1) {
          largeText = content.substring(0, splitIndex)
          normalText = content.substring(splitIndex + 1)
        } else {
          largeText = content.substring(0, maxLengthLarge)
          normalText = content.substring(maxLengthLarge)
        }
      }
    }
  }

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

  useEffect(() => {
    const isAlreadyAnsweredByUser =
      question?.questionData?.answers &&
      Array.isArray(question.questionData.answers) &&
      question.questionData.answers.some(
        (answer) => answer.author_id === user?.id
      )

    if (isAlreadyAnsweredByUser !== undefined) {
      setIsAlreadyAnswered(isAlreadyAnsweredByUser)
    }
  }, [question, user])

  const hasThreeAnswers =
    Array.isArray(question?.questionData?.answers) &&
    question?.questionData.answers.length === 3

  const hasAnswer =
    question &&
    question.questionData &&
    Array.isArray(question.questionData.answers) &&
    hasAnswered.length > 0

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

  const handleReportClick = () => {
    if (id !== undefined) {
      setCurrentEntityId(String(id))
      setIsOpening(true)
    }
  }

  const handleCloseModal = () => {
    setCurrentEntityId(null)
    setIsOpening(false)
  }

  useEffect(() => {
    if (isMobile && isAnswering) {
      setIsAnsweringMobile(true)
    } else {
      setIsAnsweringMobile(false)
    }
  }, [isMobile, isAnswering, setIsAnsweringMobile])

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
                  <Link
                    style={{ textDecoration: 'none' }}
                    href={`/profile/${authorId}/answers`}
                  >
                    <Text style={{ fontFamily: 'Poppins' }} weight="medium">
                      {author}
                    </Text>
                  </Link>
                </S.Username>
                <S.UserLevel>{authorLevel}</S.UserLevel>
              </S.UserInfo>
              <S.SubInfosContainer>
                <S.DateTimeText size="xs" weight="regular">
                  {getFormattedDateAndTime(createdAt)}
                </S.DateTimeText>
                <span>•</span>
                <S.SubjectText size="xs" weight="semibold">
                  {subject}
                </S.SubjectText>
              </S.SubInfosContainer>
            </S.InfoWrapperr>
          </S.QuestionInfoWrapper>

          {hasAnswer ? (
            <S.HasAnsweredContainer>
              <S.AnwseredStamp>
                <FiCheckCircle size={16} color="#fff" />
                <Text size="xs" weight="bold" color="white">
                  respondida
                </Text>
              </S.AnwseredStamp>
            </S.HasAnsweredContainer>
          ) : null}
        </S.QuestionInfo>

        {hasAnswer ? (
          <S.HasAnsweredContainerMobile>
            <S.AnwseredStamp>
              <FiCheckCircle size={16} color="#fff" />
              <Text size="xs" weight="bold" color="white">
                respondida
              </Text>
            </S.AnwseredStamp>
          </S.HasAnsweredContainerMobile>
        ) : null}

        <S.QuestionContent isAuthor={isAuthor}>
          <S.QuestionTitle>
            <S.QuestionTitleText
              size="xx1"
              weight="bold"
              color="blue_950"
            ></S.QuestionTitleText>
          </S.QuestionTitle>
          <S.ContentContainer>
            {loading ? (
              <div>
                <SkeletonLine
                  width={29}
                  rows={2}
                  height={6}
                  rounding="rounded-none"
                />
              </div>
            ) : (
              <Text
                color="blue_950"
                size="xl"
                weight="semibold"
                style={{
                  marginTop: '1.5rem',
                  lineHeight: '28px',
                  fontFamily: 'ProximaNova',
                  fontSize: '22px',
                }}
              >
                {largeText}
              </Text>
            )}
            {normalText && (
              <Text
                color="blue_950"
                style={{
                  marginTop: '0.5rem',
                  lineHeight: '24px',
                  fontFamily: 'ProximaNova',
                  fontSize: '18px',
                }}
              >
                {normalText}
              </Text>
            )}
          </S.ContentContainer>
        </S.QuestionContent>

        {isAnsweringMobile && (
          <AnswerMobileEditor avatarUrl={user?.avatar_url} />
        )}

        <S.UserHandleActionsContainer>
          {isAuthor && !hasAnswer ? null : (
            <S.ButtonsContainer>
              {!isLoggedIn && hasAnswer ? (
                <Link
                  href="#answers"
                  style={{ textDecoration: 'none', width: '100%' }}
                >
                  <S.SeeAnswerButtonContainer hug={true}>
                    VER{' '}
                    <S.QuantityCircle>
                      <Text weight="bold" color="white">
                        {answersQuantity}
                      </Text>
                    </S.QuantityCircle>
                    {answersQuantity === 1 ? 'RESPOSTA' : 'RESPOSTAS'}
                  </S.SeeAnswerButtonContainer>
                </Link>
              ) : null}

              <S.AnswerButtonAuthor isAuthor={isAuthor}>
                <AnswerButton
                  isMobile={isMobile}
                  answersQuantity={answersQuantity}
                  hasAnswer={hasAnswer}
                  isAuthor={isAuthor}
                  hasThreeAnswers={hasThreeAnswers}
                  isAlreadyAnsweredByUser={alreadyAnswered}
                  loading={loading}
                  points={points}
                />
              </S.AnswerButtonAuthor>
            </S.ButtonsContainer>
          )}

          {!isAuthor && (
            <S.ModerationWrapper>
              {isLoggedIn ? (
                <div>
                  {isReported || isModerated ? (
                    <Tooltip content="Em moderação">
                      <S.ReportedButton style={{ color: '#D20032' }}>
                        <AiFillFlag size={24} color="#D20032" />
                      </S.ReportedButton>
                    </Tooltip>
                  ) : (
                    <Tooltip content="Denunciar">
                      <Dialog.Root
                        open={currentEntityId === id && isOpening}
                        onOpenChange={setIsOpening}
                      >
                        <Dialog.Trigger asChild>
                          <S.ModerateButton onClick={handleReportClick}>
                            <AiOutlineFlag size={24} color="#000" />
                          </S.ModerateButton>
                        </Dialog.Trigger>
                        <ReportQuestionModal
                          entityType="QUESTION"
                          entityId={id}
                          handleCloseModal={handleCloseModal}
                        />
                      </Dialog.Root>
                    </Tooltip>
                  )}
                </div>
              ) : (
                <Tooltip content="Entre para denunciar">
                  <Link href={'/signin'}>
                    <S.ModerateButton onClick={handleReportClick}>
                      <AiOutlineFlag size={24} color="#000" />
                    </S.ModerateButton>
                  </Link>
                </Tooltip>
              )}
            </S.ModerationWrapper>
          )}
        </S.UserHandleActionsContainer>

        {!token || !isLoggedIn ? (
          <Link href="/signin" style={{ textDecoration: 'none' }}>
            <S.NoLoggedMoreDetailsInputContainer>
              <S.LoginLink weight="semibold">Entrar</S.LoginLink>
              <S.NoLoggedMoreDetailsInput
                {...register('content')}
                placeholder={`para adicionar um comentário`}
              />
            </S.NoLoggedMoreDetailsInputContainer>
          </Link>
        ) : (
          <>
            {' '}
            {loading ? (
              <>
                <SkeletonLine
                  width={29}
                  rows={3}
                  height={6}
                  rounding="rounded-none"
                />
              </>
            ) : (
              <>
                <S.MoreDetailsInputContainer>
                  <Avatar
                    variant="sm"
                    imageUrl={user?.avatar_url ? user?.avatar_url : null}
                    id={String(user?.id)}
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
                      placeholder={`Pedir detalhes para ${author}`}
                    />
                    {isSubmitting ? (
                      <Spinner
                        size="md"
                        baseColor="blue_950"
                        variant="secondary"
                      />
                    ) : (
                      <S.SendButton type="submit">
                        <MdOutlineSend size={16} color="#000" />
                      </S.SendButton>
                    )}
                  </S.CommentForm>
                </S.MoreDetailsInputContainer>
                {formState.errors.content && (
                  <div style={{ marginTop: '1rem' }}>
                    <span
                      style={{
                        color: '#D20032',
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                      }}
                    >
                      {formState.errors.content.message}
                    </span>
                  </div>
                )}
              </>
            )}
          </>
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
                isReported={
                  comment.reports && comment.reports.length > 0
                    ? comment.reports[0].isOpen
                    : false
                }
              />
            ))}
          </S.CommentSection>

          {comments.length > MAX_DISPLAY_COMMENTS && !showAllComments && (
            <S.SeeMoreContainer>
              <S.SeeMoreButton
                onClick={() => setShowAllComments(true)}
                border={false}
              >
                VER MAIS COMENTÁRIOS
              </S.SeeMoreButton>
            </S.SeeMoreContainer>
          )}
        </>
      </S.QuestionBoxContainer>
    </S.QuestionWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = withSession(
  async (_ctx) => {
    try {
      const cookies = parseCookies(_ctx)
      const existingToken = cookies['questty-token']
      const isLoggedIn = !!existingToken

      return { props: { isLoggedIn } }
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
      return { props: { questionData: null } }
    }
  }
)
