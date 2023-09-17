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
import { IQuestion } from '@/shared/types'
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

interface QuestionProps {
  answersQuantity?: number
}

export default function Question() {
  const router = useRouter()
  const { id } = router.query
  const setQuestion = useQuestionStore((state) => state.setQuestion)
  const question = useQuestionStore((state) => state.question)

  useEffect(() => {
    if (id) {
      const fetchQuestionAndAnswers = async () => {
        try {
          const questionResponse = await api.get(`/questions/${id}`)
          const question = questionResponse.data.question
          setQuestion(question)
        } catch (error) {
          console.error('Erro ao buscar a pergunta:', error)
        }
      }

      fetchQuestionAndAnswers()
    }
  }, [id, setQuestion])

  return (
    <>
      <Header />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <QuestionBox
            id={question?.id}
            key={question?.id}
            content={question?.content}
            answersQuantity={question?.answers?.length || 0}
            createdAt={question?.createdAt}
            author={question?.author?.name}
          />
          <S.AnswersSection>
            <S.TextSectionTitle weight="bold" color="blue_950">
              Respostas:
            </S.TextSectionTitle>
          </S.AnswersSection>
          <S.AnswersContainer>
            {question?.answers.map((answer) => (
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
