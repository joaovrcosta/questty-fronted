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
import xpIcon from '@/assets/icons/xp.svg'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface AnswerButtonProps {
  isMobile: boolean
  isAuthor: boolean
  isAlreadyAnsweredByUser: boolean
  hasThreeAnswers: boolean
  loading: boolean
  answersQuantity: number | undefined
  hasAnswer: boolean | null
  points: number
}

export function AnswerButton({
  isMobile,
  isAuthor,
  isAlreadyAnsweredByUser,
  hasThreeAnswers,
  loading,
  answersQuantity,
  hasAnswer,
  points,
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
          RESPONDER
          <Text color="yellow_620" weight="bold">
            + {points} XP
          </Text>
          <Image src={xpIcon} height={22} alt="" />
        </S.AnswerButton>
      </Dialog.Trigger>
      <LoginModal text="Oi Oi" />
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
          RESPONDER
          <Text color="yellow_620" weight="bold">
            + {points} XP
          </Text>
          <Image src={xpIcon} height={22} alt="" />
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
        <S.ButtonContainer>
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
              RESPONDER
              <Text color="yellow_620" weight="bold">
                + {points} XP
              </Text>
              <Image src={xpIcon} height={22} alt="" />
            </S.AnswerButton>
          )}
          {alreadyAnswered && !isAnswering && hasAnswer && (
            <Link href="#answers">
              <S.SeeAnswerButton
                variant="lg"
                rounding="rounded-full"
                color="white"
                backgroundColor="black"
              >
                <AiFillEye size={24} />
                <Text color="white" weight="bold" style={{ fontSize: '15px' }}>
                  VER {answersQuantity} RESPOSTAS
                </Text>
              </S.SeeAnswerButton>
            </Link>
          )}
        </S.ButtonContainer>
      ) : (
        <>
          {hasAnswer && (
            <Link href="#answers" style={{ width: '100%' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <S.SeeAnswerButton
                  variant="lg"
                  rounding="rounded-full"
                  color="white"
                  backgroundColor="black"
                >
                  <AiFillEye size={24} />
                  <Text
                    color="white"
                    weight="bold"
                    style={{ fontSize: '15px' }}
                  >
                    VER {answersQuantity}{' '}
                    {answersQuantity === 1 ? 'RESPOSTA' : 'RESPOSTAS'}
                  </Text>
                </S.SeeAnswerButton>
              </motion.div>
            </Link>
          )}
        </>
      )}
    </>
  )
}
