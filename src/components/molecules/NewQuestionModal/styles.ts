import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(253, 255, 244, 0.9);
  overflow: hidden;
`

export const Content = styled(Dialog.Content)`
  min-width: 43.75rem;
  padding: 2.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 5px;
      border: 0;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.gray_400};
      font-family: Poppins;
      border: 1px solid ${({ theme }) => theme.colors.black};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors.gray_500};
      }
    }

    button[type='submit'] {
      height: 50px;
      border: 0;
      width: 12rem;
      background: ${({ theme }) => theme.colors.blue_500};
      font-size: 15px;
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
      font-family: Poppins;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 25px;
      margin-top: 1.5rem;
      cursor: pointer;
      margin: 0 auto;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      :not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.blue_550};
        transition: background-color 0.2s;
      }
    }
  }

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      top: 55%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 820px) {
      top: 55%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      top: 55%;
      width: 90%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 680px) {
      min-width: 25rem;
    }
  `}


  ${({ theme }) => css`
    @media (max-width: 512px) {
      min-width: 24.375rem;
    }
  `}
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_500};
`

export const QuestionTextarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  height: 20rem;
  padding: 1rem;
  font-family: Inter;
  font-size: 16px;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      height: 12rem;
    }
  `};
`

export const QuestionMoreInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9rem;
`

export const InputFile = styled.input`
  width: 14rem;
  background-color: ${({ theme }) => theme.colors.yellow_200};
  border: none;
  border: 1px dashed ${({ theme }) => theme.colors.black};
`
