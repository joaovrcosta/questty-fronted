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
import { FaCircleCheck } from 'react-icons/fa6'
import { NextSeo } from 'next-seo'
import { FaLockOpen } from 'react-icons/fa6'
import Link from 'next/link'
import { parseCookies } from 'nookies'

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

  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const answerStore = useAnswerStore()

  const { user, isLoggedIn } = useAuthStore()
  const { question } = useQuestionStore()
  const { answers } = useAnswerStore()
  const textForTitle = `${question?.questionData?.content.substring(
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
    answerStore.setAnswers(props?.questionData?.answers ?? [])
  }, [question])

  useEffect(() => {
    if (question === null) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  })

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
    } else if (props.questionData.answers.length > 0) {
      return answers?.map((answer) => (
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
          {answers?.length === 0 && (
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
                    <Link href="/signin">
                      <S.SignInButton backgroundColor="white" color="black">
                        ENTRAR
                      </S.SignInButton>
                    </Link>
                    <Link href="/signup">
                      <S.SignUpButton backgroundColor="white" color="black">
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
              <S.TextSectionTitle
                weight="bold"
                color="blue_950"
                id="#respostas"
              >
                Respostas:
              </S.TextSectionTitle>
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

    if (existingToken) {
      // Token existe, você pode fazer alguma coisa se necessário
      console.log('Token encontrado nos cookies:', existingToken)
    }

    const res = await api.get(`questions/${id}`)
    const questionData = res.data.question

    if (questionData !== undefined) {
      return { props: { questionData } }
    } else {
      return { props: {} }
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { questionData: null } }
  }
}
