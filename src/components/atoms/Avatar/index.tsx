import * as S from './styles'
import Link from 'next/link'

interface AvatarProps {
  variant: S.sizeVariants
  imageUrl: string
  id?: string
}

export function Avatar({ variant, imageUrl, id }: AvatarProps) {
  return (
    <>
      <S.UserAvatarContainer variant={variant}>
        <Link href={`/profile/${id}`}>
          <S.AvatarImage src={imageUrl} variant={variant} />
        </Link>
      </S.UserAvatarContainer>
    </>
  )
}
