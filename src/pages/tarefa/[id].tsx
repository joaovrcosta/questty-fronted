import * as S from '../../styles/pages/tarefa'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import api from '@/services/api'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { IQuestionData } from '@/shared/types'
import { useEffect, useState } from 'react'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Text } from '@/components/atoms/Text'
import GirlLamp from '@/assets/GirlLamp.svg'
import Image from 'next/image'
import { MoreQuestonCard } from '@/components/molecules/MoreQuestion'
import { useAnswerStore } from '@/features/stores/answer/useAnswerStore'
import { SkeletonLine } from '@/components/atoms/Skeleton'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import { GoPlus } from 'react-icons/go'
import { NextSeo } from 'next-seo'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useAuthModalStore } from '@/features/stores/authModal/authModal'
import { LoginModal } from '@/components/molecules/LoginModal'
import Divider from '@/components/molecules/Divider'
import { useIsMobileStore } from '@/features/stores/isMobile/userIsMobile'

interface Question {
  id: number
  content: string
  createdAt: string

  answers: {
    id: string
    content: string
    createdAt: string
    thanks: number
    isGolden: boolean
  }[]
}

export default function Question(props: IQuestionData) {
  const [loading, setLoading] = useState(true)
  const { isMobile, setIsMobile } = useIsMobileStore()

  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const answerStore = useAnswerStore()
  const { isOpening, setIsOpening } = useAuthModalStore()

  const { user } = useAuthStore()
  const { question } = useQuestionStore()
  const { answers, currentNewAnswer } = useAnswerStore()
  const isLoggedIn = props.isLoggedIn

  const textForTitle = `${props.questionData.content.substring(
    0,
    100
  )} - Questty.com`

  const answersAuthorIds = question?.questionData?.answers.map(
    (resposta) => resposta.author_id
  )
  const userLogged = user?.id

  const isUserInList = userLogged && answersAuthorIds?.includes(userLogged)

  useEffect(() => {
    setQuestion(props)
  }, [props])

  useEffect(() => {
    if (question === null) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const allAnswers = [
    ...(currentNewAnswer ? [answerStore.currentNewAnswer] : []),
    ...(props.questionData.answers || []),
  ]

  const renderAnswers = () => {
    if (loading) {
      return (
        <>
          <div
            style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <SkeletonLine
              width={820}
              rows={1}
              height={200}
              rounding="rounded"
            />
          </div>
          <div
            style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <SkeletonLine
              width={820}
              rows={1}
              height={200}
              rounding="rounded"
            />
          </div>
          <div
            style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <SkeletonLine
              width={820}
              rows={1}
              height={200}
              rounding="rounded"
            />
          </div>
        </>
      )
    } else if (allAnswers.length > 0) {
      return allAnswers.map((answer) => (
        <AnswerBox
          isButtonDisabled={
            isUserInList && answer?.author_id === userLogged ? true : false
          }
          key={answer?.id}
          id={answer?.id}
          authorId={answer?.author_id}
          content={answer?.content}
          createdAt={answer?.createdAt}
          isGolden={answer?.isGolden}
          author={answer?.author?.username}
          likesQuantity={answer?.likes?.length || 0}
          avatarUrl={answer?.author?.avatar_url}
        />
      ))
    } else {
      return (
        <S.NeedHelpContainer>
          {allAnswers.length === 0 && (
            <>
              <Image src={GirlLamp} alt="" />
              <Text size="xx1" weight="medium">
                {props.questionData?.author.username} precisa da sua ajuda.
              </Text>
              <Text>Essa pergunta não teve resposta ainda</Text>
              <S.AnswerButton backgroundColor="black" color="white">
                <GoPlus size={24} />
                RESPONDER
              </S.AnswerButton>
            </>
          )}
        </S.NeedHelpContainer>
      )
    }
  }

  return (
    <>
      <NextSeo
        title={textForTitle}
        description="Rede social educativa onde os alunos se ajudam uns aos outros com as lições de casa, trocam conhecimento, estudam em grupo e fazem amizades."
      />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <QuestionBox
            id={props.questionData?.id}
            key={props.questionData?.id}
            content={props.questionData?.content}
            answersQuantity={props.questionData?.answers.length || 0}
            createdAt={props.questionData?.createdAt}
            author={props.questionData?.author.username}
            avatarUrl={props.questionData?.author?.avatar_url}
            isMobile={isMobile}
            authorId={props.questionData.author_id}
            hasAnswered={allAnswers}
          />

          {!isLoggedIn && (
            <>
              <S.CallToActionCard>
                <>
                  <S.HeadingCallToAction>
                    <Text size="xx1" weight="extrabold">
                      Garanta acesso grátis para outras respostas
                    </Text>
                  </S.HeadingCallToAction>
                  <S.AdvantagesContainer>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <S.CheckIcon />
                      <Text>Veja mais respostas</Text>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <S.CheckIcon />
                      <Text>Aprenda em comunidade</Text>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <S.CheckIcon />
                      <Text>Pergunte quanto quiser</Text>
                    </div>
                  </S.AdvantagesContainer>
                  <S.ButtonsContainer>
                    <Dialog.Root open={isOpening} onOpenChange={setIsOpening}>
                      <Dialog.Trigger asChild>
                        <S.SignInButton backgroundColor="black" color="white">
                          ENTRAR
                        </S.SignInButton>
                      </Dialog.Trigger>
                      <LoginModal />
                    </Dialog.Root>

                    <Link href="/signup">
                      <S.SignUpButton backgroundColor="black" color="white">
                        CADASTRE-SE
                      </S.SignUpButton>
                    </Link>
                  </S.ButtonsContainer>
                </>
              </S.CallToActionCard>
            </>
          )}

          <S.AnswersSection>
            {answers && answers.length > 0 ? (
              <Divider>
                <S.TextSectionTitle>Respostas</S.TextSectionTitle>
              </Divider>
            ) : null}
          </S.AnswersSection>
          <S.AnswersContainer>{renderAnswers()}</S.AnswersContainer>
          <S.HelpMorePeopleContainer>
            <Text size="xl" weight="semibold">
              Ajude outras pessoas com dúvidas sobre{' '}
              {props?.questionData?.category.name}
            </Text>
            <div style={{ marginTop: '1.5rem' }}>
              <MoreQuestonCard />
              <MoreQuestonCard />
              <MoreQuestonCard />
            </div>
          </S.HelpMorePeopleContainer>
        </S.QuestionWrapper>
      </S.QuestionContainer>
      <FloatingButton />
    </>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params

  try {
    const cookies = parseCookies(ctx)
    const existingToken = cookies['questty-token']
    let isLoggedIn = false

    if (existingToken) {
      isLoggedIn = true
    }

    const res = await api.get(`questions/${id}`)
    const questionData = res.data.question

    if (questionData !== undefined) {
      return { props: { questionData, isLoggedIn } }
    } else {
      return { props: {} }
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { questionData: null } }
  }
}
