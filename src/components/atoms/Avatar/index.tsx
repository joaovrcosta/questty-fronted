import * as S from './styles'
import Link from 'next/link'
import { BlankAvatar } from './BlankAvatar'

interface AvatarProps {
  variant: S.sizeVariants
  imageUrl: string | null
  id?: string
}

export function Avatar({ variant, imageUrl, id }: AvatarProps) {
  return (
    <>
      <S.UserAvatarContainer variant={variant}>
        <Link href={`/profile/${id}/answers`}>
          {imageUrl !== null ? (
            <S.AvatarImage src={imageUrl} variant={variant} />
          ) : (
            <BlankAvatar variant={variant} />
          )}
        </Link>
      </S.UserAvatarContainer>
    </>
  )
}
