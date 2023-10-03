import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'

interface IUserRankingProps {
  avatarUrl: string
  username: string
  points: number
}

export function UserRankingBox({
  avatarUrl,
  username,
  points,
}: IUserRankingProps) {
  // Adicione essa lógica para limitar o nome de usuário a 14 caracteres
  const truncatedUsername =
    username.length > 14 ? `${username.slice(0, 14)}...` : username

  return (
    <S.UserRankingContainer>
      <S.UserInfo>
        <Avatar variant="sm" imageUrl={avatarUrl} />
        <Text weight="semibold" size="sm">
          {truncatedUsername}
        </Text>
      </S.UserInfo>
      <Text weight="bold">{points} pts</Text>
    </S.UserRankingContainer>
  )
}
