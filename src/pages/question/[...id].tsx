import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/question'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import { QuestionContext } from '@/contexts/QuestionsContext'
import { useContextSelector } from 'use-context-selector'
import { NotFoundAnswersBox } from '@/components/molecules/NotFoundAnswerBox'
import { Footer } from '@/components/organisms/Footer'

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
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  const router = useRouter()
  const { id } = router.query

  const question = questions.find((question) => question.id === Number(id))

  const answersQuantity = question?.answers.length || 0

  const limitedAnswers = question?.answers.slice(0, 3) || []

  const hasMultipleGoldenAnswers =
    limitedAnswers.filter((answer) => answer.isGolden).length > 1

  return (
    <>
      <Header />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          {question && (
            <QuestionBox
              key={question.id}
              id={question.id}
              content={question.content}
              createdAt={question.createdAt}
              answersQuantity={answersQuantity}
            />
          )}
          <S.AnswersSection>
            <S.TextSectionTitle weight="bold" color="blue_950">
              Respostas:
            </S.TextSectionTitle>
          </S.AnswersSection>
          <S.AnswersContainer>
            {limitedAnswers.length > 0 ? (
              limitedAnswers.map((answer, index) => {
                const isGolden = answer.isGolden && !hasMultipleGoldenAnswers

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
            )}
          </S.AnswersContainer>
        </S.QuestionWrapper>
      </S.QuestionContainer>
      <Footer />
    </>
  )
}
