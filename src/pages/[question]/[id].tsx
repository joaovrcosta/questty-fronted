import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/question'

export default function Question() {
  const router = useRouter()

  return (
    <>
      <Header />
      <S.QuestionContainer>
        <h1>Post: {router.query.id}</h1>
      </S.QuestionContainer>
    </>
  )
}
