import * as S from '../styles/pages/index'
import { Heading } from '@/components/atoms/Heading'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { BsFillGearFill } from 'react-icons/bs'
import { NextPageWithLayout } from './_app'
import DefaultLayout from '@/components/templates/Default'
import { ReactElement } from 'react'

const Home: NextPageWithLayout = () => {
  return (
    <>
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
                <BsFillGearFill size={18} />
              </S.SubjectButtonModal>
            </S.SubjectContent>
            <S.MakeQuestionButtonContainer>
              <S.MakeQuestionButton
                rounding="rounded-thin"
                variant="lg"
                backgroundColor="transparent"
              >
                Perguntar
              </S.MakeQuestionButton>
            </S.MakeQuestionButtonContainer>
          </S.SubjectsContainer>
          <S.QuestionsContainer>
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

Home.getLayout = (pages: ReactElement) => {
  return <DefaultLayout>{pages}</DefaultLayout>
}

export default Home
