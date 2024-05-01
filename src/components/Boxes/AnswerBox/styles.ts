import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
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
    isGolden ? theme.colors.white : theme.colors.white};
  border: 1px solid
    ${({ theme, isGolden }) =>
      isGolden ? theme.colors.green_500 : theme.colors.black};
  padding: 1.5rem 2rem;
  border-radius: 16px;
  width: 90%;
  box-shadow: ${({ theme, isGolden }) =>
    isGolden
      ? '0px 4px 5px 10px rgba(240, 250, 245, 1)'
      : '0px 4px 5px 10px rgba(0, 0, 0, 0.05)'};

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
        isGolden ? theme.colors.white : theme.colors.white};
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
        isGolden ? theme.colors.green_500 : theme.colors.black};
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
      padding: 1.5rem;

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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const AnswerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
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

  & > p {
    margin-bottom: 1rem;
  }

  & > ul {
    margin-bottom: 0.5rem;
  }

  & > h3 {
    margin-bottom: 1rem;
  }
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
  margin-top: 1.5rem;
  border-bottom: 2px solid #e5e5e5;
  padding: 0 0 1rem 0;
  margin-bottom: 1.5rem;
`

export const LikedButton = styled(Button)`
  font-weight: 700;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-bottom: 4px solid ${({ theme }) => theme.colors.black};
  padding: 1.02rem;
  height: 40px;

  &:focus {
    transition: 0.2s ease all;
  }

  &:disabled {
    opacity: 0.8;
    /* border: 2px solid #ff341a; */
  }

  &:active {
    border-bottom: 2px solid #000;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
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
  background-color: #00672e;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
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
  }
`

export const QuestionInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const MoreDetailsInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const MoreDetailsInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
`

export const hearthIconCSS = styled(AiFillHeart)`
  color: ${({ theme }) => theme.colors.hearth_500};
`

export const HeartIconOutline = styled(AiOutlineHeart)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`

export const ExplanationContainer = styled.div`
  margin-top: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  border-radius: 12px;
`
export const ExplanationTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 12px 12px 0 0;
  background-color: rgba(11, 172, 128, 0.1);
  padding: 1rem;
  border-bottom: none;
`
export const ExplanationText = styled.div`
  padding: 1rem;
  border-radius: 0 0 12px 12px;
`
export const ConnectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0 0.5rem 0;
`
export const ModerationButton = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: 0.2s ease all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`
export const ModeratedButton = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: 0.2s ease all;
`
