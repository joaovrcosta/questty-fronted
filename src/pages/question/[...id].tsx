import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/question'
import { QuestionBox } from '@/components/molecules/QuestionBox'
import { AnswerBox } from '@/components/molecules/AnswerBox'
import { Text } from '@/components/atoms/Text'

export default function Question() {
  const router = useRouter()

  return (
    <>
      <Header />
      <S.QuestionContainer>
        <S.QuestionWrapper>
          <QuestionBox />
          <Text>Respostas:</Text>
          <S.AnswersContainer>
            <AnswerBox />
            <AnswerBox />
            <AnswerBox />
          </S.AnswersContainer>
        </S.QuestionWrapper>
      </S.QuestionContainer>
    </>
  )
}
