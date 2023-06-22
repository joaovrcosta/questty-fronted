import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/question'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import { Text } from '@/components/atoms/Text'
import { QuestionContext } from '@/contexts/QuestionsContext'
import { useContextSelector } from 'use-context-selector'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { NotFoundAnswersBox } from '@/components/molecules/NotFoundAnswerBox'

interface Question {
  id: number
  content: string
  createdAt: string
  answers: {
    id: string
    content: string
    createdAt: string
  }[]
}

export default function Question() {
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  const router = useRouter()
  const { id } = router.query

  const question = questions.find((question) => question.id === Number(id))

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
            />
          )}
          <S.AnswersSection>
            <S.TextSectionTitle weight="bold" color="blue_950">
              Respostas:
            </S.TextSectionTitle>
          </S.AnswersSection>
          <S.AnswersContainer>
            {question && question.answers.length > 0 ? (
              question.answers.map((answer, index) => (
                <AnswerBox
                  key={index} // Usando o índice como chave, pois não temos um identificador único 'id' nas respostas
                  id={index} // Usando o índice como identificador
                  content={answer.content}
                  createdAt={answer.createdAt}
                />
              ))
            ) : (
              <NotFoundAnswersBox />
            )}
          </S.AnswersContainer>
        </S.QuestionWrapper>
      </S.QuestionContainer>
    </>
  )
}
