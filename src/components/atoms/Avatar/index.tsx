import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'

export function Avatar() {
  return (
    <>
      <S.UserAvatarContainer>
        <Link
          href="/profile/1
        "
        >
          <Image
            src="https://avatars.githubusercontent.com/u/70654718?v=4"
            alt=""
            width={48}
            height={48}
            style={{ borderRadius: '50%', display: 'block' }}
          />
        </Link>
      </S.UserAvatarContainer>
    </>
  )
}
