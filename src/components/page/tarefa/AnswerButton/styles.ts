import { Button } from '@/components/atoms/Button'
import styled from 'styled-components'

interface IAnswerButton {
  isAnswering?: boolean
}
export const AnswerButton = styled(Button)<IAnswerButton>`
  font-weight: 700;
  height: 46px;
  padding-left: 28px;
  padding-right: 28px;
  width: 240px;

  &:focus {
    border: 2px solid #000;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 769px) {
    width: 100%;
  }

  ${({ isAnswering }) =>
    isAnswering &&
    `
    display: none;
  `}
`
export const SeeAnswerButton = styled(Button)`
  font-weight: 600;
  height: 46px;
  border: 2px solid ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue_950};
    transition: 0.2s ease all;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`
export const ButtonContainer = styled.div`
  @media (max-width: 769px) {
    width: 100%;
  }
`
