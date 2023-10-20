import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(253, 255, 244, 0.9);
  overflow: hidden;
  z-index: 999999;
`

export const Content = styled(Dialog.Content)`
  min-width: 43.75rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
  z-index: 999999;
  max-height: 25.8rem;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
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
      height: 40px;
      border: 0;
      width: 12rem;
      background: ${({ theme }) => theme.colors.blue_950};
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
      font-family: Poppins;
      font-weight: 600;
      padding: 0 1.25rem;
      border-radius: 25px;
      cursor: pointer;
      text-transform: uppercase;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      :not(:disabled):hover {
        opacity: 0.95;
        transition: 0.2s;
      }

      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.white};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue_950};
        transition: 0.2s ease all;
      }
    }
  }

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      top: 30%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 820px) {
      max-height: 520px;
      top: 35%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      max-height: 402px;
      top: 35%;
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

  border-radius: 26px;
  background-color: #ebf2f7;
  height: 10.5rem;
  padding: 1rem;
  font-family: Inter;
  font-size: 16px;
  max-height: 650px;
  outline: none;
  margin-top: 1rem;
  resize: none;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_600};
  }

  &:focus {
    border: 2px solid #6d83f3;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.1s ease all;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      height: 12rem;
    }
  `};
`

export const QuestionMoreInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const InputFile = styled.input`
  width: 14rem;
  background-color: ${({ theme }) => theme.colors.yellow_200};
  border: none;
  border: 1px dashed ${({ theme }) => theme.colors.black};
`

export const FileButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }

  &:focus {
    border: 2px solid #6d83f3;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.1s ease all;
  }
`

export const Tools = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Selects = styled.div``

export const SubjectSelect = styled.select`
  height: 2.5rem;
  width: 180px;
  background-color: #ebf2f7;
  border: none;
  color: #46535f;
  font-family: Poppins;
  cursor: pointer;

  border-radius: 30px;
  padding: 0 0 0 16px;

  &:focus {
    border: 2px solid #6d83f3;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.1s ease all;
  }

  &:hover {
    opacity: 0.8;
  }
`
