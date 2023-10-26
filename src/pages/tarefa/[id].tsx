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
import Head from 'next/head'
import { SkeletonLine } from '@/components/atoms/Skeleton'

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
  const { user } = useAuthStore()
  const { question } = useQuestionStore()
  const { answer } = useAnswerStore()
  const textForTitle = question?.questionData?.content.substring(0, 100)

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
    } else if (answer) {
      return (
        <AnswerBox
          key={answer?.answer.id}
          id={String(answer?.answer.id)}
          authorId={String(answer?.answer.author_id)}
          content={String(answer?.answer.content)}
          createdAt={String(answer?.answer.createdAt)}
          isGolden={answer?.answer.isGolden}
          author={user?.username}
          avatarUrl={answer?.answer.author?.avatar_url}
          likesQuantity={0}
          isButtonDisabled={true}
        />
      )
    } else if (props.questionData?.answers.length > 0) {
      return props.questionData.answers.map((answer) => (
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
          {answer ? null : (
            <>
              <Image src={GirlLamp} alt="" />
              <Text size="xx1" weight="medium">
                {props.questionData?.author.name} precisa da sua ajuda.
              </Text>
              <Text>Essa pergunta não teve resposta ainda</Text>
              <S.AnswerButton>RESPONDER</S.AnswerButton>
            </>
          )}
        </S.NeedHelpContainer>
      )
    }
  }

  return (
    <>
      <Head>
        <title>{textForTitle} | Questty</title>

        <meta name="title" content={`${textForTitle} | Questty`} />
        <meta name="description" content="Descrição da sua página aqui" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="URL_DA_SUA_PÁGINA" />
        <meta property="og:title" content={`${textForTitle} | Questty`} />
        <meta
          property="og:description"
          content="Descrição da sua página aqui"
        />
        <meta property="og:image" content="URL_DA_IMAGEM_DE_DESTAQUE" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="URL_DA_SUA_PÁGINA" />
        <meta property="twitter:title" content={`${textForTitle} | Questty`} />
        <meta
          property="twitter:description"
          content="Descrição da sua página aqui"
        />
        <meta property="twitter:image" content="URL_DA_IMAGEM_DE_DESTAQUE" />
      </Head>

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
          <S.AnswersSection>
            {props?.questionData?.answers.length > 0 || answer ? (
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
    </>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params as { id: string }

  try {
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
