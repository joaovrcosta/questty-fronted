import * as Menu from '@radix-ui/react-dropdown-menu'
import * as S from './styles'
import Link from 'next/link'

interface DropdownProps {
  id?: string
}
export function Dropdown({ id }: DropdownProps) {
  return (
    <Menu.Root>
      <S.UserAvatarContainer>
        <Link
          href="/profile/1
        "
        >
          <S.AvatarImage src="https://avatars.githubusercontent.com/u/70654718?v=4" />
        </Link>
      </S.UserAvatarContainer>
      <S.Content align="end">
        <Link href={`/profile/${id}`}>
          <S.Item>Ver perfil</S.Item>
        </Link>
        <S.Item>Editar Perfil</S.Item>
        <S.Item>Sair</S.Item>
      </S.Content>
    </Menu.Root>
  )
}
