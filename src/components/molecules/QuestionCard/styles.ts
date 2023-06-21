import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled, { css } from 'styled-components'

export const QuestionCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4);
  padding: 0.875rem 2.5rem 0.875rem 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  opacity: 1;
  filter: brightness(100%);
  transition: opacity 0.3s ease all, filter 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
    transition: 0.3s ease all;
  }

  &:hover::before {
    content: '';
    position: absolute;
    border-radius: 5px 0 0px 5px;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: ${({ theme }) => theme.colors.blue_500};
  }

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

  ${({ theme }) => css`
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  `}
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

export const QuestionText = styled(Text)`
  line-height: 1.4;
  font-family: Roboto;

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
`

export const QuestionInfo = styled.div`
  width: 24rem;
`

export const SubjectAndDateTimeContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`
export const Subject = styled(Text)`
  font-family: Roboto;
`
export const DateTime = styled(Text)`
  font-family: Roboto;
`

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
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue_300};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    /* transition: 0.2s ease all; */
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
