import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/atoms/Button'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  z-index: 999999;
`

export const Content = styled(Dialog.Content)`
  min-width: 1000px;
  font-family: Poppins;
  padding: 0 1rem;
  z-index: 999999;
  max-height: 980px;
  border-radius: 5px;
  display: flex;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};

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
      height: 56px;
      border: 0;
      width: 12rem;
      background: ${({ theme }) => theme.colors.blue_500};
      font-size: 14px;
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
      font-family: Poppins;
      font-weight: 600;
      padding: 0 1.25rem;
      border-radius: 10px;
      cursor: pointer;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

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
      top: 50%;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 1080px) {
      top: 65%;
      flex-wrap: wrap;
      /* flex-direction: column-reverse; */
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
      top: 28%;
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

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 28rem;
  padding: 1rem;
  font-family: Roboto;
  font-size: 16px;
  max-height: 650px;
  outline: none;
  resize: none;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_600};
  }

  &:focus {
    border: 2px solid #6d83f3;
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

export const QuestionTextContainer = styled.div`
  width: 360px;

  @media (max-width: 1080px) {
    width: 100%;
    /* flex-direction: column-reverse; */
  }

  @media (max-width: 960px) {
    padding: 0 6rem;
    /* flex-direction: column-reverse; */
  }

  @media (max-width: 680px) {
    padding: 0.5rem 0 0 0;
    width: 100%;
    /* flex-direction: column-reverse; */
  }
`

export const FormAnsweringContainer = styled.div`
  width: 644px;

  @media (max-width: 1080px) {
    width: 100%;
    margin-top: 2rem;
    /* flex-direction: column-reverse; */
  }

  @media (max-width: 960px) {
    padding: 0 6rem;
    margin-top: 2rem;
    width: 100%;
    /* flex-direction: column-reverse; */
  }

  @media (max-width: 680px) {
    padding: 0.5rem 0;
    margin-top: 0;
    width: 100%;
    /* flex-direction: column-reverse; */
  }
`

export const QuestionInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
`

export const AvatarInfoContainer = styled.div``

export const InfoWrapperr = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 280px) {
    display: none;
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

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (max-width: 680px) {
    padding: 0;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
`

export const BackButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.5rem;
  transition: 0.2s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.gray_100};
  }
`

export const TextContainer = styled.div`
  padding: 0 2rem 0 0;
  max-height: 500px;
  width: 100%;

  @media (max-width: 680px) {
    padding: 0;
    max-height: 250px;
  }

  overflow-y: auto;
`

export const AvatarInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const CloseButtonMobile = styled.div`
  display: none;
  @media (max-width: 1080px) {
    display: block;
  }
`

export const AnswerButton = styled(Button)`
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid #000;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.black};
    transition: 0.2s ease all;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`
