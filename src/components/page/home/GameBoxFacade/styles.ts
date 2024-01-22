import { Text } from '@/components/atoms/Text'
import Link from 'next/link'
import styled from 'styled-components'

export const ProfileInfoSidebar = styled.div`
  padding: 0 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 320px;

  @media (max-width: 1168px) {
    display: none;
  }
`
export const RankingBox = styled.div`
  font-family: Poppins;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #000;
  padding: 1.25rem;
  border-radius: 16px;
  /* box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4); */
  max-height: 22rem;
  max-width: 320px;
  width: 100%;
`
export const ProfileSiderbarHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0 1.5rem 0;
`
export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const UsernameLinkContainer = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export const Nickname = styled(Text)``

export const QuestionPoints = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray_150};
  border-radius: 25px;
  padding: 0.25rem 0.25rem 0.25rem 0;
  margin-bottom: 1rem;
  width: 100%;
`

export const StarContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
`
export const StarQuantity = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
`
export const MoreConfigurations = styled.div`
  margin-top: 1rem;
`
export const MoreConfigurationsButton = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_150};
  }
`
export const SubInfo = styled.div`
  height: 3.5rem;
  width: 100%;
`
export const PointsContainer = styled.div`
  display: flex;
`
