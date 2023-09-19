import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/question'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import { Footer } from '@/components/organisms/Footer'
import api from '@/services/api'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { IQuestionData } from '@/shared/types'
import { useEffect } from 'react'

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
  const router = useRouter()
  const { id } = router.query
  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const question = useQuestionStore((state) => state.question)

  useEffect(() => {
    setQuestion(props)
  }, [props])

  return (
    <>
      <Header />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <QuestionBox
            id={props.questionData?.id}
            key={props.questionData?.id}
            content={props.questionData?.content}
            answersQuantity={props.questionData.answers.length || 0}
            createdAt={props.questionData?.createdAt}
            author={props.questionData?.author.name}
          />
          <S.AnswersSection>
            <S.TextSectionTitle weight="bold" color="blue_950">
              Respostas:
            </S.TextSectionTitle>
          </S.AnswersSection>
          <S.AnswersContainer>
            {props?.questionData.answers.map((answer) => (
              <AnswerBox
                key={answer?.id}
                id={answer?.id}
                content={answer?.content}
                createdAt={answer?.createdAt}
                isGolden={answer?.isGolden}
                author={answer?.author?.name}
                likesQuantity={answer?.likes?.length || 0}
              />
            ))}
          </S.AnswersContainer>
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

    console.log('Resposta da requisição:', questionData)

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
