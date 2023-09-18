import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`
export const ProfileContent = styled.div`
  display: flex;
  padding: 3.25em;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    padding: 1;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 3rem 1rem 1rem 1rem;
  }
`

export const UserInfo = styled.aside`
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0 4.5rem 0 0;
  max-height: 25.8rem;

  @media (max-width: 1100px) {
    border: none;
    padding: 0;
    width: 100%;
  }

  @media (max-width: 768px) {
    border: none;
    padding: 0;
    width: 100%;
  }
`

export const SeenIn = styled.div`
  margin-top: 1rem;
  font-family: Poppins;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const UserEditing = styled.div`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`

export const UserHistoryContainer = styled.div`
  padding: 0 0 0 4.5rem;
  width: 100%;

  @media (max-width: 1100px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 1.5rem;
  }
`

export const CreatedAt = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.25rem;
`

export const UserHistory = styled.div`
  font-family: Poppins;
  margin-top: 1rem;
`

export const ActiveIn = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const ActiveAtContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const ShowmoreQuestionsButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const showMoreButton = styled(Button)`
  &:hover {
    background-color: #eaece1;
    transition: 0.3s ease all;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditButtonMobile = styled(Button)`
  display: none;

  @media (max-width: 1100px) {
    display: block;
  }
`

export const EditButton = styled(Button)`
  @media (max-width: 1100px) {
    display: none;
  }
`

export const UserAvatarPhoto = styled(Avatar)`
  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`

export const signOutButton = styled(Button)`
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_950};
    transition: 0.3s ease all;
    color: ${({ theme }) => theme.colors.white};
  }
`
export const NotFindAnyAnswer = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  border-radius: 20px;
`

export const UserDetailsBox = styled.div`
  padding: 1rem 0rem 0rem 0rem;
  display: flex;
  gap: 0.5rem;
`

export const AnswersQuantity = styled.div`
  padding: 0.5rem 1rem;
  width: 6rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  text-align: center;
`
