import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const QuestionBoxContainer = styled.div`
  position: relative;
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
    top: 13%;
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
    top: 13%;
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
export const LogoIcon = styled(Image)`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 72px;
    }
  `}
`

export const QuestionInfo = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const QuestionInfoWrapper = styled.div`
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

export const AnswerQuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const AnswerQuantity = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`

// Question Content

export const QuestionContent = styled.div`
  margin-bottom: 1.5rem;
`

export const QuestionTitleText = styled(Text)`
  font-family: Nunito;
  line-height: 1.2;
`

export const QuestionTitle = styled.div`
  margin-bottom: 1rem;
`

export const QuestionContentText = styled.div``

// User Handle Actions
export const UserHandleActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const AnswerButton = styled(Button)`
  padding: 1.625rem 2rem;
  font-weight: 400;
  border: 2px solid ${({ theme }) => theme.colors.black};

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
`

// More Details

export const MoreDetailsInputContainer = styled.div``

export const MoreDetailsInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
`

export const QuestionWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`

export const UserAvatarContainer = styled.div`
  margin-top: 5rem;
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
