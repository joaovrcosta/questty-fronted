import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/tarefa'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import { Footer } from '@/components/organisms/Footer'
import api from '@/services/api'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { IQuestionData } from '@/shared/types'
import { useEffect } from 'react'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Text } from '@/components/atoms/Text'
import GirlLamp from '@/assets/GirlLamp.svg'
import Image from 'next/image'
import { MoreQuestonCard } from '@/components/molecules/MoreQuestion'
import { useAnswerStore } from '@/features/stores/answer/useAnswerStore'
import Head from 'next/head'

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
  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const { user } = useAuthStore()
  const { question } = useQuestionStore()
  const { answer } = useAnswerStore()
  const textForTitle = question?.questionData.content.substring(0, 100)

  const answersAuthorIds = question?.questionData.answers.map(
    (resposta) => resposta.author_id
  )
  const userLogged = user?.id

  const isUserInList = userLogged && answersAuthorIds?.includes(userLogged)

  useEffect(() => {
    setQuestion(props)
  }, [props])

  return (
    <>
      <Head>
        <title>{textForTitle} | Questty</title>
      </Head>

      <Header />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <QuestionBox
            id={props.questionData?.id}
            key={props.questionData?.id}
            content={props.questionData?.content}
            answersQuantity={props.questionData.answers.length || 0}
            createdAt={props.questionData?.createdAt}
            author={props.questionData?.author.username}
            avatarUrl={props.questionData?.author.avatar_url}
          />
          <S.AnswersSection>
            {props?.questionData.answers.length > 0 || answer ? (
              <S.TextSectionTitle
                weight="bold"
                color="blue_950"
                id="#respostas"
              >
                Respostas:
              </S.TextSectionTitle>
            ) : null}
          </S.AnswersSection>
          <S.AnswersContainer>
            {answer ? (
              <AnswerBox
                key={answer?.answer.id}
                id={String(answer?.answer.id)}
                authorId={String(answer?.answer.author_id)}
                content={String(answer?.answer.content)}
                createdAt={String(answer?.answer.createdAt)}
                isGolden={answer?.answer.isGolden}
                author={user?.name}
                avatarUrl={answer?.answer.author.avatar_url}
                likesQuantity={0}
                isButtonDisabled={true}
              />
            ) : props?.questionData.answers.length > 0 ? (
              props?.questionData.answers.map((answer) => (
                <AnswerBox
                  isButtonDisabled={
                    isUserInList && answer?.author_id === userLogged
                      ? true
                      : false
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
            ) : (
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
            )}
          </S.AnswersContainer>
          <S.HelpMorePeopleContainer>
            <Text size="xl" weight="semibold">
              Ajude outras pessoas com dúvidas sobre{' '}
              {props?.questionData.category.name}
            </Text>
            <div style={{ marginTop: '1.5rem' }}>
              <MoreQuestonCard />
              <MoreQuestonCard />
              <MoreQuestonCard />
            </div>
          </S.HelpMorePeopleContainer>
        </S.QuestionWrapper>
      </S.QuestionContainer>
      <Footer />
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
