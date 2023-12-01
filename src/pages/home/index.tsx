import * as S from '../../styles/pages/home'
import { Heading } from '@/components/atoms/Heading'
import { QuestionCard } from '@/components/molecules/QuestionCard'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '@/components/molecules/NewQuestionModal'
import { UserRankingBox } from '@/components/molecules/UserRakingBox'
import { Text } from '@/components/atoms/Text'
import { FaCrown } from 'react-icons/fa'
import { GetServerSideProps } from 'next'
import { withSession } from '@/lib/with-session'
import { useQuestionsStore } from '@/features/stores/questions/useQuestionsStore'
import { useEffect, useState } from 'react'
import api from '@/services/api'
import Head from 'next/head'
import { SkeletonLine } from '@/components/atoms/Skeleton'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import { Avatar } from '@/components/atoms/Avatar'
import { Tooltip } from '@/components/molecules/Tooltip'
import { SiCrystal } from 'react-icons/si'
import { MdArrowForwardIos } from 'react-icons/md'
import { SlGraph } from 'react-icons/sl'
import mathIcon from '@/assets/subjects/math-icon.svg'
import { PiMathOperationsFill } from 'react-icons/pi'
import { ImEarth } from 'react-icons/im'
import { FaLeaf } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import Image from 'next/image'
import { CardAlert } from '@/components/molecules/CardAlert'
import Link from 'next/link'

export default function Home() {
  const questionStore = useQuestionsStore()
  const { user } = useAuthStore()
  const questions = useQuestionsStore((state) => state.questions)
  const [loading, setLoading] = useState(true)

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
      <Head>
        <title>Questões com respostas para todas as matérias | Questty</title>
      </Head>

      <S.HomePageContent>
        <S.FeedContentWrapper>
          <S.HeadingBox>
            <S.Welcome>
              {/* <Heading
                size="sm"
                weight="bold"
                color="blue_950"
                style={{ whiteSpace: 'nowrap' }}
              >
                Olá, 👋
              </Heading>
              <Heading size="sm" weight="bold" color="blue_500">
                {user?.username}
              </Heading> */}
              <div style={{ maxWidth: '650px', marginBottom: '1rem' }}>
                <Heading size="lgg" weight="extrabold" color="black">
                  Esclareça suas dúvidas, pergunte para a comunidade
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
              ) : (
                questions?.map((question) => (
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
              )}
            </S.QuestionsWrapper>
          </S.QuestionsContainer>
        </S.FeedContentWrapper>
        <S.SideBar>
          <S.ProfileInfoSidebar>
            {/* <S.RankingTitle>
              <Heading
                size="sm"
                weight="bold"
                color="blue_950"
                style={{ whiteSpace: 'nowrap' }}
              >
                Meu perfil
              </Heading>
            </S.RankingTitle> */}
            <S.RankingBox>
              <S.RankingHeading>
                <S.UserAvatarWrapper>
                  <Avatar
                    id={user?.id}
                    variant="lg"
                    imageUrl={user?.avatar_url ? user?.avatar_url : null}
                  />
                </S.UserAvatarWrapper>
                <div>
                  <S.UsernameLinkContainer
                    href={`/profile/${user?.id}/answers`}
                    passHref
                  >
                    <S.Nickname weight="semibold" color="blue_950">
                      {user?.username}
                    </S.Nickname>
                  </S.UsernameLinkContainer>
                  <Text size="sm">#{Number(user?.code)}</Text>
                </div>
              </S.RankingHeading>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
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
              </div>
              <S.MoreConfigurations>
                <S.MoreConfigurationsButton>
                  <Text
                    weight="semibold"
                    size="sm"
                    color="blue_950"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Respostas verificadas
                  </Text>
                  <MdArrowForwardIos size={24} color="#45A6FF" />
                </S.MoreConfigurationsButton>
                <S.MoreConfigurationsButton>
                  <Text
                    weight="semibold"
                    color="blue_950"
                    size="sm"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Meus emblemas
                  </Text>
                  <MdArrowForwardIos size={24} color="#45A6FF" />
                </S.MoreConfigurationsButton>
                <S.MoreConfigurationsButton>
                  <Text
                    weight="semibold"
                    color="blue_950"
                    style={{ whiteSpace: 'nowrap' }}
                    size="sm"
                  >
                    Configurações da conta
                  </Text>
                  <MdArrowForwardIos size={24} color="#45A6FF" />
                </S.MoreConfigurationsButton>
              </S.MoreConfigurations>
            </S.RankingBox>
          </S.ProfileInfoSidebar>

          <S.RankingSidebar>
            {/* <S.SelectWrapper>
              <S.Selected>
                <option value="opcao1">Diario</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
              </S.Selected>
            </S.SelectWrapper> */}
            <S.RankingBox>
              <S.RankingHeading>
                <FaCrown size={24} color="#c98600" />
                <Text weight="semibold">Melhores Estudantes</Text>
              </S.RankingHeading>
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

          <S.AnswersBySubject>
            <S.RankingBox>
              <S.RankingHeading>
                <SlGraph size={24} color="#45A6FF" />
                <Text weight="semibold">Você se destaca em</Text>
              </S.RankingHeading>
              <S.UserRankingWrapper>
                <S.SubjectContainer>
                  <div>
                    <PiMathOperationsFill size={24} color="#45A6FF" />
                  </div>
                  <div>
                    <Text weight="semibold">Matemática</Text>
                    <Text size="sm">123 respostas</Text>
                  </div>
                </S.SubjectContainer>
                <S.SubjectContainer>
                  <div>
                    <ImEarth size={24} color="#45A6FF" />
                  </div>
                  <div>
                    <Text weight="semibold">Geografia</Text>
                    <Text size="sm">123 respostas</Text>
                  </div>
                </S.SubjectContainer>
                <S.SubjectContainer>
                  <div>
                    <FaLeaf size={24} color="#45A6FF" />
                  </div>
                  <div>
                    <Text weight="semibold">Biologia</Text>
                    <Text size="sm">123 respostas</Text>
                  </div>
                </S.SubjectContainer>
              </S.UserRankingWrapper>
              <S.MoreTextContainer>
                <Text color="blue_950">Ver mais</Text>
              </S.MoreTextContainer>
            </S.RankingBox>
          </S.AnswersBySubject>
        </S.SideBar>
      </S.HomePageContent>
      <FloatingButton />
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
