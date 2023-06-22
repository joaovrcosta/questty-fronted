import { Avatar } from '@/components/atoms/Avatar'
import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled, { css } from 'styled-components'

export const AnswerWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`

export const AnswerBoxContainer = styled.div`
  position: relative;
  max-height: 640px;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0px 4px 5px 10px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: -31px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.colors.white};
    z-index: 9999;
  }

  &::after {
    content: '';
    position: absolute;
    top: 25%;
    left: -32px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;

      &::before {
        display: none;
      }

      &::after {
        display: none;
      }
    }
  `}
`

export const UserAvatarContainer = styled.div`
  margin-top: 6.1rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.4rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const AnswerInfo = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const AnswerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Username = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;
`

export const UserLevel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  height: 32px;
  width: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnswerContent = styled.div``

export const QuestionTitleText = styled(Text)`
  font-family: Nunito;
  line-height: 1.2;
`

export const AnswerInfoWrapperContainer = styled.div``

export const UserSubInfosContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`

export const UserTag = styled(Text)`
  font-family: Poppins;
`

export const AnswerViews = styled(Text)`
  font-family: Poppins;
`

export const AnswerRateContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const StarsRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: Poppins;
`

export const CrownNumberContainer = styled.div`
  font-family: Poppins;
`

export const CrownNumber = styled(Text)``

export const UserHandleActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`

export const LikedButton = styled(Button)`
  font-weight: 700;
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 0rem 0.75rem;

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }
`

export const ModerationWrapper = styled.div``

export const ModerateLabel = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: Poppins;
`

export const AvatarContainer = styled.div`
  margin-top: 6rem;
  margin-right: 2.4rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `};
`
