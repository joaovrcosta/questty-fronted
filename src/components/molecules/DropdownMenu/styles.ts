import * as Menu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const UserAvatarContainer = styled(Menu.Trigger)`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue_950};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 40px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.blue_950};
    transition: 0.2s ease all;
  }
  &:active {
    background-color: hsl(19deg 93% 44%);
  }
`

export const AvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`

export const Content = styled(Menu.Content)`
  min-width: 205px;
  padding: 1rem;
  margin-top: 0.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.black};
`

export const Item = styled(Menu.Item)`
  font-size: 1.1rem;
  padding: 1rem;
  border-radius: 6px;
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
