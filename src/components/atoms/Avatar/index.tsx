import Image from 'next/image'
import * as S from './styles'

export function Avatar() {
  return (
    <>
      <S.UserAvatarContainer>
        <Image
          src="https://avatars.githubusercontent.com/u/70654718?v=4"
          alt=""
          width={48}
          height={48}
          style={{ borderRadius: '50%' }}
        />
      </S.UserAvatarContainer>
    </>
  )
}
