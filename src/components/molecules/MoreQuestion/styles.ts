import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled, { css } from 'styled-components'

export const QuestionCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  /* border-bottom: 3px solid ${({ theme }) => theme.colors.black}; */
  border-radius: 16px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4);
  padding: 0.15rem 2.5rem 0.15rem 1.5rem;
  margin-bottom: 0.5rem;
  opacity: 1;
  filter: brightness(100%);
  transition: opacity 0.3s ease all, filter 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
    transition: 0.3s ease all;
  }

  /* &:hover::before {
    content: '';
    position: absolute;
    border-radius: 16px 0 0px 16px;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: ${({ theme }) => theme.colors.blue_500};
  } */

  ${({ theme }) => css`
    @media (max-width: 768px) {
      padding: 0.875rem 1rem 0.875rem 1rem;
    }
  `}
`

export const QuestionContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  `};
`

export const UserAvatarContainer = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`

export const QuestionContent = styled.div`
  display: flex;
  align-items: center;
`

export const QuestionText = styled.a`
  line-height: 1.4;
  font-family: Roboto;
  /* height: 68px; */

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${({ theme }) => css`
    @media (max-width: 540px) {
      /* overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; */
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 500px) {
      width: 330px;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 450px) {
      width: 290px;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 400px) {
      width: 230px;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 350px) {
      width: 200px;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 280px) {
      width: 150px;
    }
  `}
`

export const QuestionInfo = styled.div`
  min-height: 64px;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`

export const SubjectAndDateTimeContainer = styled.div`
  margin-bottom: 0.3rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
export const Subject = styled(Text)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
`
export const DateTime = styled(Text)``

export const AswerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AnswerButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AnswerButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.black};
  max-width: 144px;
  font-family: Poppins;
  color: ${({ theme }) => theme.colors.blue_950};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue_300};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    /* transition: 0.2s ease all; */
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue_950};
    transition: 0.2s ease all;
  }
`

export const AnswerQuantity = styled.div`
  display: flex;
  align-items: center;
`

export const UserHandleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-left: 0.3rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      flex-direction: row-reverse;

      margin-top: 0.5rem;
    }
  `}
`

export const UserAvatarWrapper = styled.div`
  margin-right: 1rem;
`
