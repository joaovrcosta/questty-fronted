import * as S from '../../styles/pages/tarefa'
import { QuestionBox } from '@/components/Boxes/QuestionBox'
import { AnswerBox } from '@/components/Boxes/AnswerBox'
import api from '@/services/api'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { IQuestion, IQuestionData } from '@/shared/types'
import { use, useEffect, useState } from 'react'
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
import { useAuthModalStore } from '@/features/stores/modals-stores/authModal/authModal'
import { LoginModal } from '@/components/modals/LoginModal'
import Divider from '@/components/molecules/Divider'
import { useIsMobileStore } from '@/features/stores/isMobile/userIsMobile'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import Custom404 from '../404'
import { useWindowSize } from 'usehooks-ts'

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
  if (!props.questionData) {
    return <Custom404 />
  }

  const [loading, setLoading] = useState(true)
  const [subjectQuestions, setSubjectQuestions] = useState([])
  // const { width, height } = useWindowSize()
  const { isMobile, setIsMobile } = useIsMobileStore()

  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const answerStore = useAnswerStore()
  const { isOpening, setIsOpening } = useAuthModalStore()

  const { user, isLoggedIn } = useAuthStore()
  const { question, setAnswerQuantity, answerQuantity } = useQuestionStore()
  const { answers, currentNewAnswer } = useAnswerStore()
  // const isLoggedIn = props.isLoggedIn

  const textForTitle = `${props.questionData?.content.substring(
    0,
    100
  )} - Questty.com`

  const isAuthor = question?.questionData?.author_id === user?.id

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

  useEffect(() => {
    const quantity = props.questionData?.answers.length
    setAnswerQuantity(quantity)
  }, [props.questionData?.answers])

  useEffect(() => {
    setSubjectQuestions(props.recomendedQuestions)
  }, [])

  const allAnswers = [
    ...(currentNewAnswer ? [answerStore.currentNewAnswer] : []),
    ...(props.questionData?.answers || []),
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
              width: '100%',
            }}
          >
            <SkeletonLine
              width={700}
              rows={1}
              height={280}
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
              height={280}
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
              height={280}
              rounding="rounded"
            />
          </div>
        </>
      )
    } else if (allAnswers.length > 0) {
      return allAnswers.map((answer) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          key={answer?.id}
        >
          <AnswerBox
            isButtonDisabled={
              isUserInList && answer?.author_id === userLogged ? true : false
            }
            id={answer?.id}
            authorId={answer?.author_id}
            content={answer?.content}
            createdAt={answer?.createdAt}
            isGolden={answer?.isGolden}
            author={answer?.author?.username}
            likesQuantity={answer?.likes?.length || 0}
            avatarUrl={answer?.author?.avatar_url}
            authorLevel={answer?.author?.level}
            isReported={answer?.reports[0]?.isOpen}
          />
        </motion.div>
      ))
    } else {
      return !isAuthor ? (
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
      ) : (
        <S.ShareYourKnowledgeContainer>
          <S.ShareKnowledgeText size="xx1" weight="medium">
            Compartilhe seu conhecimento enquanto você espera
          </S.ShareKnowledgeText>
          <Link href="/" style={{ width: '100%' }}>
            <S.ShareKnowButton backgroundColor="black" color="white">
              <GoPlus size={24} />
              RESPONDER UMA PERGUNTA
            </S.ShareKnowButton>
          </Link>
        </S.ShareYourKnowledgeContainer>
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionBox
              id={props.questionData?.id}
              key={props.questionData?.id}
              content={props.questionData?.content}
              answersQuantity={answerQuantity}
              createdAt={props.questionData?.createdAt}
              author={props.questionData?.author.username}
              authorLevel={props.questionData?.author.level}
              avatarUrl={props.questionData?.author?.avatar_url}
              isMobile={isMobile}
              authorId={props.questionData?.author_id}
              hasAnswered={allAnswers}
              subject={props.questionData?.subject.name}
              points={props.questionData?.points}
              isReported={props.questionData.reports[0]?.isOpen}
            />
          </motion.div>

          {isLoggedIn ? null : (
            <>
              <S.CallToActionCard>
                <>
                  <S.HeadingCallToAction>
                    <Text size="xx1" weight="extrabold">
                      Crie uma conta e tenha acesso a{' '}
                      <span style={{ color: '#00672e' }}>
                        respostas verificadas e para todas matérias
                      </span>
                      . É rápido, fácil e gratuito!
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
                    <S.SignUpContainer>
                      <Link href="/signup">
                        <S.SignUpButton
                          backgroundColor="black"
                          color="white"
                          hug={true}
                        >
                          CADASTRE-SE
                        </S.SignUpButton>
                      </Link>
                      <S.TermsBox>
                        <Text size="xs">
                          Ao se cadastrar, você aceita os{' '}
                          <strong>Termos de Serviço do Questty</strong> e a{' '}
                          <strong>Política de Privacidade</strong>.
                        </Text>
                      </S.TermsBox>
                    </S.SignUpContainer>
                    <S.SignInContainer>
                      <Text>Já tem conta?</Text>
                      <Dialog.Root open={isOpening} onOpenChange={setIsOpening}>
                        <Dialog.Trigger asChild>
                          <Text style={{ color: '#014a82' }} weight="semibold">
                            Entre aqui
                          </Text>
                        </Dialog.Trigger>
                        <LoginModal text="Olá novamente" />
                      </Dialog.Root>
                    </S.SignInContainer>
                  </S.ButtonsContainer>
                </>
              </S.CallToActionCard>
            </>
          )}

          <S.AnswersSection id="answers">
            {allAnswers.length > 0 ? (
              <Divider>
                <S.TextSectionTitle>Respostas</S.TextSectionTitle>
              </Divider>
            ) : null}
          </S.AnswersSection>
          <S.AnswersContainer>{renderAnswers()}</S.AnswersContainer>
          {subjectQuestions?.length >= 1 ? (
            <S.HelpMorePeopleContainer>
              <Text size="xl" weight="semibold">
                Ajude outras pessoas com dúvidas sobre{' '}
                {props?.questionData?.subject.name}
              </Text>
              <div style={{ marginTop: '1.5rem' }}>
                {subjectQuestions.map((question: IQuestion) => (
                  <MoreQuestonCard
                    content={question.content}
                    id={question.id}
                    subjectName={question.subject.name}
                    createdAt={question.createdAt}
                    points={question.points}
                    avatar_url={question.author.avatar_url ?? ''}
                    author_id={question.author_id}
                  />
                ))}
              </div>
            </S.HelpMorePeopleContainer>
          ) : null}
        </S.QuestionWrapper>
      </S.QuestionContainer>
      <FloatingButton />
      {/* <Confetti width={100} height={100} /> */}
    </>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params

  try {
    const cookies = parseCookies(ctx)
    const existingToken = cookies['questty-token']
    let isUserLogged = false

    if (existingToken) {
      isUserLogged = true
    }

    const res = await api.get(`questions/${id}`)
    const questionData = res.data.question

    const response = await api.get(
      `/questions/latest-by-subject/${questionData.subject.id}`
    )
    const recomendedQuestions = response.data

    if (questionData !== undefined) {
      return { props: { questionData, isUserLogged, recomendedQuestions } }
    } else {
      return { props: {} }
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { questionData: null } }
  }
}
