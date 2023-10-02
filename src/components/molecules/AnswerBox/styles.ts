import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled, { css } from 'styled-components'

interface IAnswerBox {
  isGolden: boolean
}

export const AnswerWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`

export const AnswerBoxContainer = styled.div<IAnswerBox>`
  position: relative;
  background-color: ${({ theme, isGolden }) =>
    isGolden ? theme.colors.yellow_200 : theme.colors.white};
  border: 1px solid
    ${({ theme, isGolden }) =>
      isGolden ? theme.colors.yellow_500 : theme.colors.black};
  padding: 2rem 2rem;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0px 4px 5px 10px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 80px;
    left: -31px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${({ theme, isGolden }) =>
        isGolden ? theme.colors.yellow_200 : theme.colors.white};
    z-index: 9999;
  }

  &::after {
    content: '';
    position: absolute;
    top: 80px;
    left: -32px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${({ theme, isGolden }) =>
        isGolden ? theme.colors.yellow_500 : theme.colors.black};
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

      border-radius: 0;
      border-right: none;
      border-left: none;
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

  @media (max-width: 768px) {
    display: block;
  }
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
  cursor: pointer;
  width: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Poppins;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnswerContent = styled.div``

export const AnswerContentText = styled(Text)`
  font-family: Nunito;
  line-height: 24px;
  height: 100%;
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
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const StarsRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: Poppins;

  @media (max-width: 768px) {
    display: none;
  }
`

export const CrownNumberContainer = styled.div`
  font-family: Poppins;
`

export const CrownNumber = styled(Text)`
  @media (max-width: 768px) {
    display: none;
  }
`

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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ModerationWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 50%;
  transition: 0.2s ease all;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`

export const ModerateLabel = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-family: Poppins;
`

export const AvatarContainer = styled.div`
  margin-top: 55px;
  margin-right: 2.4rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `};
`

export const BestAnswerStamp = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow_500};
  padding: 0.25rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 25px;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    /* display: none; */
    svg {
      display: none;
    }
  }
`

export const CreatedAtContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`

export const QuestionInfo = styled.div`
  display: flex;
  gap: 1rem;
`
