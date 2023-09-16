import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/question'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import { NotFoundAnswersBox } from '@/components/molecules/NotFoundAnswerBox'
import { Footer } from '@/components/organisms/Footer'
import api from '@/services/api'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { GetServerSideProps } from 'next'

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

interface QuestionProps {
  answersQuantity?: number
}

export default function Question() {
  const questioStore = useQuestionStore()
  const questions = useQuestionsStore((state) => state.questions)

  const router = useRouter()
  const { questionId } = router.query

  // const question = questions?.find((question) => question.id === Number(id))

  // const answersQuantity = question?.answers.length || 0

  // const limitedAnswers = question?.answers.slice(0, 3) || []

  // const hasMultipleGoldenAnswers =
  //   limitedAnswers.filter((answer) => answer.isGolden).length > 1

  return (
    <>
      <Header />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          {/* {question && (
            <QuestionBox
              key={question.id}
              id={question.id}
              content={question.content}
              createdAt={question.createdAt}
              answersQuantity={answersQuantity}
            />
          )} */}
          <S.AnswersSection>
            <S.TextSectionTitle weight="bold" color="blue_950">
              Respostas:
            </S.TextSectionTitle>
          </S.AnswersSection>
          <S.AnswersContainer>
            {/* {limitedAnswers.length > 0 ? (
              limitedAnswers.map((answer, index) => {
                return (
                  <AnswerBox
                    key={index}
                    id={index}
                    content={answer.content}
                    createdAt={answer.createdAt}
                    isGolden={isGolden} // Set whether the question is golden or not
                    thanks={answer.thanks}
                  />
                )
              })
            ) : (
              <NotFoundAnswersBox />
            )} */}
          </S.AnswersContainer>
        </S.QuestionWrapper>
      </S.QuestionContainer>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { questionId } = ctx.params as { questionId: string }

  try {
    console.log(questionId)
    const response = await api.get(`/questions/${questionId}`)

    console.log(response)

    return {
      props: {
        response,
      },
      revalidate: 1,
    }
  } catch (error) {
    console.error('Erro ao buscar a pergunta:', error)
    return {
      props: {
        error: JSON.stringify(error),
      },
    }
  }
}
