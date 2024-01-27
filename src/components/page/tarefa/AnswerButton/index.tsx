import { SkeletonLine } from '@/components/atoms/Skeleton'
import { LoginModal } from '@/components/modals/LoginModal'
import { useAuthModalStore } from '@/features/stores/modals-stores/authModal/authModal'
import * as Dialog from '@radix-ui/react-dialog'
import { AiFillEye, AiOutlinePlusCircle } from 'react-icons/ai'
import * as S from './styles'
import { AnswerModal } from '@/components/modals/AnswerModal'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Text } from '@/components/atoms/Text'

interface AnswerButtonProps {
  isMobile: boolean
  isAuthor: boolean
  isAlreadyAnsweredByUser: boolean
  hasThreeAnswers: boolean
  loading: boolean
  answersQuantity: number | undefined
  hasAnswer: boolean | null
}

export function AnswerButton({
  isMobile,
  isAuthor,
  isAlreadyAnsweredByUser,
  hasThreeAnswers,
  loading,
  answersQuantity,
  hasAnswer,
}: AnswerButtonProps) {
  const { isOpening, setIsOpening } = useAuthModalStore()
  const { question } = useQuestionStore()
  const { token, isLoggedIn } = useAuthStore()
  const {
    isOpen,
    setIsOpen,
    setIsAnswering,
    isAnswering,
    setIsAnsweringMobile,
    alreadyAnswered,
  } = useAnswerModalStore()

  const handleIsAnswering = () => {
    setIsAnswering(true)
    setIsAnsweringMobile(true)
  }

  const renderSkeleton = () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <SkeletonLine width={29} rows={3} height={10} rounding="rounded" />
      </div>
      <div>
        <SkeletonLine width={30} rows={3} height={10} rounding="rounded" />
      </div>
    </div>
  )

  const renderLoginButton = () => (
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
  )

  const renderDesktopAnswerButton = () => (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <S.AnswerButton
          variant="lg"
          rounding="rounded-full"
          color="white"
          backgroundColor="black"
          onClick={handleIsAnswering}
          isAnswering={isAnswering}
        >
          <AiOutlinePlusCircle size={24} />
          RESPONDER
        </S.AnswerButton>
      </Dialog.Trigger>
      <AnswerModal
        id={String(question?.questionData?.author_id)}
        isMobile={isMobile}
      />
    </Dialog.Root>
  )

  return (
    <>
      {!isAuthor && !isAlreadyAnsweredByUser ? (
        <div>
          {hasThreeAnswers ? (
            <></>
          ) : loading ? (
            renderSkeleton()
          ) : !token || !isLoggedIn ? (
            renderLoginButton()
          ) : !isMobile ? (
            renderDesktopAnswerButton()
          ) : (
            <S.AnswerButton
              variant="lg"
              rounding="rounded-full"
              color="white"
              backgroundColor="black"
              onClick={handleIsAnswering}
              isAnswering={isAnswering}
            >
              <AiOutlinePlusCircle size={24} />
              RESPONDER
            </S.AnswerButton>
          )}
          {alreadyAnswered && !isAnswering && hasAnswer && (
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
          )}
        </div>
      ) : (
        <>
          {hasAnswer && (
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
          )}
        </>
      )}
    </>
  )
}
