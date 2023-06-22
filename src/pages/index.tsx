import * as S from '../styles/pages/index'
import { Heading } from '@/components/atoms/Heading'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import { BsFillGearFill } from 'react-icons/bs'
import { NextPageWithLayout } from './_app'
import DefaultLayout from '@/components/templates/Default'
import { ReactElement } from 'react'
import { useContextSelector } from 'use-context-selector'
import { QuestionContext } from '@/contexts/QuestionsContext'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'

const Home: NextPageWithLayout = () => {
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  return (
    <>
      <S.HomePageContent>
        <S.FeedContentWrapper>
          <S.SubjectsContainer>
            <S.SubjectContent>
              <Heading
                size="md"
                weight="bold"
                color="blue_950"
                style={{ whiteSpace: 'nowrap' }}
              >
                Últimas perguntas
              </Heading>
              <S.Selected>
                <option value="opcao1">Todas As Matérias</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
              </S.Selected>
              <S.SelectedAlreadyAnswering>
                <option value="opcao1">Sem Resposta</option>
                <option value="opcao3">Respondidas</option>
              </S.SelectedAlreadyAnswering>
            </S.SubjectContent>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <S.MakeQuestionButton>Perguntar</S.MakeQuestionButton>
              </Dialog.Trigger>
              <NewTransactionModal />
            </Dialog.Root>
          </S.SubjectsContainer>
          <S.QuestionsContainer>
            {questions.map((question) => {
              return (
                <QuestionCard
                  key={question.id}
                  id={question.id}
                  content={question.content}
                  category={question.category}
                  createdAt={question.createdAt}
                />
              )
            })}
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
