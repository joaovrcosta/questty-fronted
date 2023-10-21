import * as S from '../../styles/pages/home'
import { Heading } from '@/components/atoms/Heading'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import { UserRankingBox } from '@/components/molecules/UserRakingBox'
import { Text } from '@/components/atoms/Text'
import { FaCrown } from 'react-icons/fa'
import { Header } from '@/components/organisms/Header'
import { GetServerSideProps } from 'next'
import { withSession } from '@/lib/with-session'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'
import { useEffect } from 'react'
import api from '@/services/api'
import { Footer } from '@/components/organisms/Footer'
import Head from 'next/head'

export default function Home() {
  const questionStore = useQuestionsStore()
  const questions = useQuestionsStore((state) => state.questions)

  console.log(questions)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await api.get('/questions/recent')
        const data = await questionsResponse.data

        questionStore.setQuestions(data.questions)
      } catch (error) {
        console.error('Erro ao buscar questões:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Questões com respostas para todas as matérias | Questty</title>
      </Head>

      <Header />
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
              <S.Selected style={{ maxWidth: '184px' }}>
                <option value="opcao1">Todas As Matérias</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
              </S.Selected>
              <S.SelectedAlreadyAnswering style={{ maxWidth: '156px' }}>
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
            {questions ? (
              questions.map((question) => (
                <QuestionCard
                  author_id={question.author_id}
                  id={question.id}
                  key={question.id}
                  content={question.content}
                  category_id={question.category.name}
                  createdAt={question.createdAt}
                  answersQuantity={question.answers?.length}
                  avatarUrl={question.author.avatar_url}
                />
              ))
            ) : (
              <p>Carregando...</p>
            )}
          </S.QuestionsContainer>
        </S.FeedContentWrapper>
        <S.RankingSidebar>
          <S.HeadingRankContainer>
            <Heading
              size="md"
              weight="bold"
              color="blue_950"
              style={{ whiteSpace: 'nowrap' }}
            >
              Ranking
            </Heading>
          </S.HeadingRankContainer>
          <S.RankingBox>
            <S.RankingHeading>
              <FaCrown size={24} color="#c98600" />
              <Text weight="semibold">Melhores Estudantes</Text>
            </S.RankingHeading>
            <S.SelectedContainer>
              <S.SelectedRanking
                style={{ maxWidth: '105px', maxHeight: '40px' }}
              >
                <option value="opcao1">Diário</option>
              </S.SelectedRanking>
            </S.SelectedContainer>
            <S.UserRankingWrapper>
              <UserRankingBox
                username="matheusq2017"
                points={1873}
                avatarUrl="https://encurtador.com.br/jwDR4"
              />
              <UserRankingBox
                username="Crocodilo25"
                points={1873}
                avatarUrl="https://encurtador.com.br/bdgzN"
              />
              <UserRankingBox
                username="
              lucasgabryelgomesoli"
                points={1839}
                avatarUrl="https://encurtador.com.br/avO89"
              />
              <UserRankingBox
                username="gustmelo92"
                points={1722}
                avatarUrl="https://encurtador.com.br/iTU49"
              />
              <UserRankingBox
                username="webnauta"
                points={952}
                avatarUrl="https://images.unsplash.com/photo-1687795975931-3e76a94abecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              />
            </S.UserRankingWrapper>
          </S.RankingBox>
        </S.RankingSidebar>
      </S.HomePageContent>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSession(
  async (_ctx) => {
    return {
      props: {},
    }
  }
)
