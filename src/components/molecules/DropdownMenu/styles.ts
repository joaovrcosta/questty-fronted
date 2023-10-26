import { Avatar } from '@/components/atoms/Avatar'
import * as Menu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const UserAvatarContainer = styled(Menu.Trigger)`
  border-radius: 50%;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:active {
    background-color: hsl(19deg 93% 44%);
  }
`

export const AvatarImage = styled(Avatar)``

export const Content = styled(Menu.Content)`
  min-width: 205px;
  padding: 1rem;
  margin-top: 0.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.black};

  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
  }
`

export const Item = styled(Menu.Item)`
  padding: 1rem;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 0;
    background: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    display: block !important;
  }
`
