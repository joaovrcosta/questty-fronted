import Link from 'next/link'
import * as S from './styles'
import blankAvatar from '@/assets/blank-profile-circle.png'

interface AvatarProps {
  variant: S.sizeVariants
  id?: string
}

export function BlankAvatar({ variant, id }: AvatarProps) {
  return (
    <S.UserAvatarContainer variant={variant}>
      <S.AvatarImage variant={variant} src={blankAvatar} alt="" />
    </S.UserAvatarContainer>
  )
}

// <S.UserAvatarContainer variant={variant}>
// <Link href={`/profile/${id}`}>

// </Link>
// </S.UserAvatarContainer>
