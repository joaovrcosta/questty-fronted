import { Avatar } from '@/components/atoms/Avatar'
import styled from 'styled-components'

export const EditProfileContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`
export const ProfileEditHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px 32px 0px;
  border-bottom: 1px solid #000;
  padding: 2.5rem 1rem 2.5rem 1rem;

  @media (max-width: 769px) {
    padding: 0 1rem 1rem 1rem;
  }
`
export const EditProfileBox = styled.div`
  padding: 3.5rem 0 3.5rem 0;
  display: flex;

  @media (max-width: 769px) {
    flex-direction: column;
    padding: 2rem 0 3.5rem 0;
  }
`

export const BoxHeading = styled.div`
  width: 400px;

  @media (max-width: 769px) {
    padding: 1rem;
    width: 100%;
  }
`

export const UserInfo = styled.div`
  width: 50%;

  @media (max-width: 769px) {
    width: 100%;
    padding: 1rem;
  }
`

export const UserAvatarPhoto = styled(Avatar)`
  @media (max-width: 769px) {
    height: 32px;
    width: 32px;
  }
`
export const FirstBoxInputs = styled.div`
  width: 100%;
`

export const UserInfoFirst = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`
export const InputRest = styled.div``

export const SubmitButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
