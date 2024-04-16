import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'
import { AiFillHeart } from 'react-icons/ai'
import styled from 'styled-components'

interface IRankProps {
  color: string
}

export const UserInfo = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0 4.5rem 0 0;

  @media (max-width: 1100px) {
    border: none;
    padding: 0;
    width: 100%;
  }

  @media (max-width: 769px) {
    border: none;
    padding: 0;
    width: 100%;
  }
`
export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserAvatarPhoto = styled(Avatar)`
  @media (max-width: 769px) {
    height: 32px;
    width: 32px;
  }
`

export const EditButtonMobile = styled(Button)`
  display: none;

  @media (max-width: 1100px) {
    display: block;
  }
`
export const FriendsQuantity = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const UserBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
`

export const StarContainer = styled.div`
  display: flex;
  height: 24px;
  width: 24px;
  padding: 0 4px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue_950};
`
export const StarQuantity = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
`
export const VerticalDivider = styled.div`
  padding: 0 0.5rem;
`
export const UserRankContainer = styled.div<IRankProps>`
  margin-top: 0.5rem;
  width: 100px;
  background-color: ${(props) => props.color};
  padding: 0.25rem 0.5rem;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`
export const UserDetailsBox = styled.div`
  padding: 2rem 0rem 0rem 0rem;
  display: flex;
  gap: 0.5rem;
  width: 100%;
`
export const AnswersQuantity = styled.div`
  padding: 0.5rem 1rem;
  min-width: 96px;
  border: 1px solid ${({ theme }) => theme.colors.blue_950};
  border-radius: 16px;
  text-align: center;

  @media (max-width: 1100px) {
    width: 33%;
  }
`
export const UserEditing = styled.div`
  margin-top: 2rem;

  @media (max-width: 769px) {
    margin-top: 1.5rem;
  }
`
export const EditButton = styled(Button)`
  @media (max-width: 1100px) {
    display: none;
  }
`
export const SeenIn = styled.div`
  margin-top: 2rem;
  font-family: Poppins;
  white-space: nowrap;

  @media (max-width: 769px) {
    margin-top: 1rem;
  }
`
export const hearthIconCSS = styled(AiFillHeart)`
  color: ${({ theme }) => theme.colors.hearth_500};
`

export const ActiveIn = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const ActiveAtContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`
export const CreatedAt = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.25rem;

  @media (max-width: 1100px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(204, 204, 204, 1);
  }
`
