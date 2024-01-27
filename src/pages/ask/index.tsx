import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { QuestionCard } from '@/components/Cards/QuestionCard'
import { Text } from '@/components/atoms/Text'
import { withSession } from '@/lib/with-session'
import { GetServerSideProps } from 'next'
import * as S from '../../styles/pages/ask'

export default function Ask() {
  return (
    <>
      <S.AskContainer>
        <S.AskContent>
          <S.SearchHeader>
            <S.AllResultsContainer>
              <Text weight="semibold" size="md">
                Todos os resultados
              </Text>
              <S.SearchQuantity>
                <Text weight="bold" size="sm">
                  0
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
            <QuestionCard
              readOnly={true}
              key="1"
              id="1"
              content="Static Content"
              createdAt="2023-06-22T12:15:02.988Z"
            />
            <QuestionCard
              readOnly={true}
              key="1"
              id="1"
              content="Static Content"
              createdAt="2023-06-22T12:15:02.988Z"
            />
            <QuestionCard
              readOnly={true}
              key="1"
              id="1"
              content="Static Content"
              createdAt="2023-06-22T12:15:02.988Z"
            />
          </S.QuestionsContainer>
        </S.AskContent>
      </S.AskContainer>
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
