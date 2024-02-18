import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background: rgba(32, 137, 234, 0.7);
  overflow: hidden;
  z-index: 999999;
`

export const Content = styled(Dialog.Content)`
  min-width: 43.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999999;
  height: 10;

  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: Poppins;
  max-height: 25.8rem;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

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
      height: 44px;
      border: 0;
      width: 12rem;
      background: rgb(73, 192, 248);
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      border-bottom: 4px solid rgb(24 153 214);
      font-family: Poppins;
      font-weight: 800;
      padding: 0 1.25rem;
      border-radius: 12px;
      cursor: pointer;
      text-transform: uppercase;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      /* :not(:disabled):hover {
        opacity: 0.95;
        transition: 0.2s;
      } */

      &:hover {
        background-color: rgb(24 153 214);
        transition: 0.4s;
      }
    }
  }

  @media (max-width: 769px) {
    min-width: 100%;
    max-height: 28rem;
    display: flex;
    width: 100%;
    border: none;
    border-radius: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const QuestionModal = styled.div``

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
  width: 100%;

  border-radius: 24px;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  letter-spacing: 0;
  border-bottom: 2px solid #e6e6e6;
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
  gap: 1rem;
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

export const SelectPointsContainer = styled.div``

export const SelectPoints = styled.select`
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  padding: 0 0 0 16px;
  font-family: Poppins;
  color: #46535f;
`
export const AdVideoLink = styled.a`
  text-decoration: none;
  color: inherit;
`
