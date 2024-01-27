import { FaCrown } from 'react-icons/fa6'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { UserRankingBox } from '@/components/Boxes/UserRakingBox'

export const RankingSideBar = () => {
  return (
    <>
      <S.RankingSidebar>
        <S.RankingBox>
          <S.RankingHeading>
            <FaCrown size={24} color="#c98600" />
            <Text weight="semibold">Ranking Semanal</Text>
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
    </>
  )
}
