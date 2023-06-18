import { Header } from '@/components/organisms/Header'
import * as S from '../styles/pages/index'
import { Heading } from '@/components/atoms/Heading'
import { Button } from '@/components/atoms/Button'
import { QuestionCard } from '@/components/molecules/QuestionCard'

export default function Home() {
  return (
    <>
      <Header />
      <S.HomePageContent>
        <S.FeedContentWrapper>
          <S.SubjectsContainer>
            <S.SubjectContent>
              <Heading size="md" weight="bold" color="blue_950">
                Últimas perguntas
              </Heading>
              <S.SubjectButtonModal
                rounding="rounded-thin"
                backgroundColor="blue_500"
                color="white"
              >
                Matérias
              </S.SubjectButtonModal>
            </S.SubjectContent>
            <S.MakeQuestionButtonContainer>
              <Button
                rounding="rounded-thin"
                variant="lg"
                backgroundColor="transparent"
              >
                Perguntar
              </Button>
            </S.MakeQuestionButtonContainer>
          </S.SubjectsContainer>
          <S.QuestionsContainer>
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </S.QuestionsContainer>
        </S.FeedContentWrapper>
      </S.HomePageContent>
    </>
  )
}
