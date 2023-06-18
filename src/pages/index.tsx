import { Header } from '@/components/organisms/Header'
import * as S from '../styles/pages/index'

export default function Home() {
  return (
    <>
      <Header />
      <S.HomePageContent>
        <h1>Feed</h1>
      </S.HomePageContent>
    </>
  )
}
