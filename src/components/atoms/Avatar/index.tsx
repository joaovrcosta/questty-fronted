import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'

interface AvatarProps {
  variant: S.sizeVariants
  imageUrl: string
}

export function Avatar({ variant, imageUrl }: AvatarProps) {
  return (
    <>
      <S.UserAvatarContainer variant={variant}>
        <Link
          href="/profile/1
        "
        >
          <S.AvatarImage src={imageUrl} variant={variant} />
        </Link>
      </S.UserAvatarContainer>
    </>
  )
}
