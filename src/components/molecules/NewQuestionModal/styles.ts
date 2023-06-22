import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(253, 255, 244, 0.8);
  overflow: hidden;
`

export const Content = styled(Dialog.Content)`
  min-width: 43.75rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  position: fixed;
  top: 40%;
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
    @media (max-width: 768px) {
      top: 50%;
      width: 100%;
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
