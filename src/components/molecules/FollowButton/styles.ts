import { Button } from '@/components/atoms/Button'
import styled from 'styled-components'

interface FollowButtonProps {
  isAlreadyFollowing: boolean
}

export const FollowButton = styled(Button)<FollowButtonProps>`
  padding: 0.65rem 1.5rem;
  width: 100%;
  background-color: ${({ theme, isAlreadyFollowing }) =>
    isAlreadyFollowing ? theme.colors.white : theme.colors.blue_500};

  color: ${({ theme, isAlreadyFollowing }) =>
    isAlreadyFollowing ? theme.colors.green_400 : theme.colors.white};

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }

  svg {
    // Adicione estilos específicos para os ícones se necessário
    color: ${(props) =>
      props.isAlreadyFollowing ? '#58cc02' : 'cor_do_icone_para_seguir'};
  }
`
