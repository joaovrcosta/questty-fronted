import * as S from '@/styles/pages/materia/enem/styles'
import { Heading } from '@/components/atoms/Heading'
import { QuestionCard } from '@/components/Cards/QuestionCard'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/modals/NewQuestionModal'
import { Text } from '@/components/atoms/Text'
import { FaCrown } from 'react-icons/fa'
import { GetServerSideProps } from 'next'
import { withSession } from '@/lib/with-session'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'
import { useEffect, useState } from 'react'
import api from '@/services/api'
import { SkeletonLine } from '@/components/atoms/Skeleton'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import { Tooltip } from '@/components/molecules/Tooltip'
import { SiCrystal } from 'react-icons/si'
import { AiFillHeart } from 'react-icons/ai'
import { CardAlert } from '@/components/Cards/CardAlert'
import { NextSeo } from 'next-seo'
import { SubjectList } from '@/components/molecules/SubjectList'
import { HomeLayout } from '@/components/layouts/home'
import { YourSubjectsSideBar } from '@/components/page/home/SubjectsSidebar'
import { RankingSideBar } from '@/components/page/home/RankingSidebar'
import { GameBoxFacade } from '@/components/page/home/GameBoxFacade'

export default function EnemPage() {
  const questionStore = useQuestionsStore()
  const questions = useQuestionsStore((state) => state.questions)
  const [loading, setLoading] = useState(true)
  const { user } = useAuthStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await api.get('/questions/recent')
        const data = await questionsResponse.data

        questionStore.setQuestions(data.questions)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar questões:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <NextSeo
        title="Questões com respostas para todas as matérias | Questty"
        description="Dúvidas resolvidas, conhecimento ampliado. No Questty, oferecemos respostas para todas as disciplinas, provenientes de especialistas e colegas estudantes. Nosso conteúdo é verificado, sendo uma fonte confiável para tarefas, provas e preparação para o ENEM. Desbrave o caminho do aprendizado conosco!"
      />

      <S.HomePageContent>
        <S.FeedContentWrapper>
          <S.HeadingBox>
            <S.Welcome>
              <div style={{ maxWidth: '650px', marginBottom: '1rem' }}>
                <Heading size="lgg" weight="extrabold" color="black">
                  Questões do ENEM
                </Heading>
              </div>
            </S.Welcome>
            <S.SubjectsContainer>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <S.MakeQuestionButton>
                    <S.PlusIcon size={24} color="#fff" />
                    <S.TextAsk size="md" color="white" weight="semibold">
                      FAÇA SUA PERGUNTA
                    </S.TextAsk>
                  </S.MakeQuestionButton>
                </Dialog.Trigger>
                <NewTransactionModal />
              </Dialog.Root>
              <S.SubjectContent>
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
            </S.SubjectsContainer>
          </S.HeadingBox>

          <S.ProfileStatsMobileContainer>
            <S.SubjectsContainer>
              <S.ProfileStatsContainer>
                <Heading
                  size="sm"
                  weight="bold"
                  color="blue_950"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Olá 👋,
                </Heading>
                <Heading size="md" weight="bold" color="blue_500">
                  {user?.username}
                </Heading>
                <S.StatsContainer>
                  <Tooltip content="Cristais">
                    <S.QuestionPoints>
                      <S.StarContainer>
                        <SiCrystal size={16} color="#1cb0f6" />
                      </S.StarContainer>
                      <S.StarQuantity>
                        <Text
                          weight="semibold"
                          color="blue_950"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          0
                        </Text>{' '}
                      </S.StarQuantity>
                    </S.QuestionPoints>
                  </Tooltip>
                  <Tooltip content="Cristais">
                    <S.QuestionPoints>
                      <S.StarContainer>
                        <AiFillHeart size={16} color="#ff341a" />
                      </S.StarContainer>
                      <S.StarQuantity>
                        <Text
                          weight="semibold"
                          color="blue_950"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          0
                        </Text>{' '}
                      </S.StarQuantity>
                    </S.QuestionPoints>
                  </Tooltip>
                  <Tooltip content="Cristais">
                    <S.QuestionPoints>
                      <S.StarContainer>
                        <FaCrown size={16} color="#c98600" />
                      </S.StarContainer>
                      <S.StarQuantity>
                        <Text
                          weight="semibold"
                          color="blue_950"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          0
                        </Text>{' '}
                      </S.StarQuantity>
                    </S.QuestionPoints>
                  </Tooltip>
                </S.StatsContainer>
              </S.ProfileStatsContainer>
              <S.SubjectContent>
                <S.Selected>
                  <option value="opcao1">Todas As Matérias</option>
                  <option value="opcao2">Opção 2</option>
                  <option value="opcao3">Opção 3</option>
                </S.Selected>
                <S.Selected>
                  <option value="opcao1">Sem Resposta</option>
                  <option value="opcao3">Respondidas</option>
                </S.Selected>
              </S.SubjectContent>
            </S.SubjectsContainer>
          </S.ProfileStatsMobileContainer>

          <CardAlert />

          <S.QuestionsContainer>
            <SubjectList subject="enem" />
            <S.QuestionsWrapper>
              {loading ? (
                <>
                  <div style={{ marginBottom: '1rem' }}>
                    <S.SkeletonLiner
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <SkeletonLine
                      width={896}
                      rows={1}
                      height={106}
                      rounding="rounded"
                    />
                  </div>
                </>
              ) : questions && questions.length > 0 ? (
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '82px',
                  }}
                >
                  <Text>Sem perguntas ainda ...</Text>
                </div>
              )}
            </S.QuestionsWrapper>
          </S.QuestionsContainer>
        </S.FeedContentWrapper>
        <S.SideBar>
          <GameBoxFacade />
          <RankingSideBar />
          <YourSubjectsSideBar />
        </S.SideBar>
      </S.HomePageContent>
      <FloatingButton />
    </>
  )
}

EnemPage.getLayout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>

export const getServerSideProps: GetServerSideProps = withSession(
  async (_ctx) => {
    return {
      props: {},
    }
  }
)
