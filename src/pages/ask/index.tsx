import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import * as S from '../../styles/pages/ask'
import { useContextSelector } from 'use-context-selector'
import { QuestionContext } from '@/contexts/QuestionsContext'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { Text } from '@/components/atoms/Text'
import { useEffect, useState } from 'react'

export default function Ask() {
  const [questionCount, setQuestionCount] = useState(0)

  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  useEffect(() => {
    setQuestionCount(questions.length)
  }, [questions])

  return (
    <>
      <Header />
      <S.AskContainer>
        <S.AskContent>
          <S.SearchHeader>
            <S.AllResultsContainer>
              <Text weight="semibold" size="md">
                Todos os resultados
              </Text>
              <S.SearchQuantity>
                <Text weight="bold" size="sm">
                  {questionCount}
                </Text>
              </S.SearchQuantity>
            </S.AllResultsContainer>
            <S.Seen style={{ cursor: 'not-allowed' }}>
              <Text weight="regular" size="md" color="gray_200">
                Vistos recentemente
              </Text>
              <S.SearchQuantity>
                <Text weight="regular" size="sm">
                  0
                </Text>
              </S.SearchQuantity>
            </S.Seen>
          </S.SearchHeader>
          <S.QuestionsContainer>
            {questions.map((question) => {
              return (
                <QuestionCard
                  readOnly={true}
                  key={question.id}
                  id={question.id}
                  content={question.content}
                  category={question.category}
                  createdAt={question.createdAt}
                />
              )
            })}
          </S.QuestionsContainer>
        </S.AskContent>
      </S.AskContainer>
      <Footer />
    </>
  )
}
