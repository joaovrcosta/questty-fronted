import * as Menu from '@radix-ui/react-dropdown-menu'
import * as S from './styles'
import Link from 'next/link'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useRouter } from 'next/router'
import { Text } from '@/components/atoms/Text'

interface DropdownProps {
  id?: string
}
export function Dropdown({ id }: DropdownProps) {
  const { user } = useAuthStore()
  const router = useRouter()

  const handleLogoutClick = () => {
    useAuthStore.getState().logout(router)
  }

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
        <ul>
          <li>
            <Link
              href={`/profile/${id}/answers`}
              style={{ textDecoration: 'none' }}
            >
              <S.Item>
                <Text size="sm">Ver perfil</Text>
              </S.Item>
            </Link>
          </li>
          <li>
            <Link
              href={`/profile/${id}/edit`}
              style={{ textDecoration: 'none' }}
            >
              <S.Item>
                <Text size="sm">Editar perfil</Text>
              </S.Item>
            </Link>
          </li>
          <li>
            <Link
              href={`/profile/${id}/edit`}
              style={{ textDecoration: 'none' }}
            >
              <S.Item>
                <Text size="sm">Configurações da conta</Text>
              </S.Item>
            </Link>
          </li>
          <li>
            <S.Item onClick={handleLogoutClick}>
              <Text size="sm">Sair</Text>
            </S.Item>
          </li>
        </ul>
      </S.Content>
    </Menu.Root>
  )
}
