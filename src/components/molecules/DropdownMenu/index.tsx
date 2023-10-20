import * as Menu from '@radix-ui/react-dropdown-menu'
import * as S from './styles'
import Link from 'next/link'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useRouter } from 'next/router'

interface DropdownProps {
  id?: string
}
export function Dropdown({ id }: DropdownProps) {
  const { logout, user } = useAuthStore()
  const router = useRouter()

  const handleLogoutClick = () => {
    useAuthStore.getState().logout(router)
  }

  console.log(user?.avatar_url)

  return (
    <Menu.Root>
      <S.UserAvatarContainer>
        <Link
          href="/profile/1
        "
        >
          <S.AvatarImage
            variant="sm"
            imageUrl={user?.avatar_url ? user?.avatar_url : null}
          />
        </Link>
      </S.UserAvatarContainer>
      <S.Content align="end">
        <Link href={`/profile/${id}`}>
          <S.Item>Ver perfil</S.Item>
        </Link>
        <S.Item>Editar Perfil</S.Item>
        <S.Item onClick={handleLogoutClick}>Sair</S.Item>
      </S.Content>
    </Menu.Root>
  )
}
