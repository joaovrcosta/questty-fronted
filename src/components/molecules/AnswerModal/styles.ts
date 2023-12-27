import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/atoms/Button'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #f5f8fa;
  overflow: hidden;
  z-index: 999999;
`

export const Content = styled(Dialog.Content)`
  height: 100%;
  width: 100%;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.white};
    /* border: 1px solid ${({ theme }) => theme.colors.black}; */
    border: 1px solid #000;

    border-bottom: 4px solid #000;

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
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

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

      @media (max-width: 420px) {
        width: 100%;
      }
    }
  }
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

  border-radius: 24px;

  height: 28rem;
  padding: 1rem;
  font-family: Roboto;
  font-size: 16px;
  max-height: 650px;
  outline: none;
  resize: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: #f7f7f7;
  border: 1px solid #000;

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
  height: 625px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  border: 1px solid #000;

  border-bottom: 4px solid #000;
  padding: 2rem 1rem 1rem 1rem;

  @media (max-width: 1180px) {
    width: 100%;
    max-height: 360px;

    /* flex-direction: column-reverse; */
  }

  @media (max-width: 960px) {
    height: 100%;
    /* flex-direction: column-reverse; */
  }

  @media (max-width: 769px) {
    width: 100%;
    max-height: 320px;
    padding: 1.5rem 1rem 1rem 1rem;
    /* flex-direction: column-reverse; */
  }
`

export const FormAnsweringContainer = styled.div`
  width: 644px;

  @media (max-width: 1180px) {
    width: 100%;
    margin-top: 2rem;
    /* flex-direction: column-reverse; */
  }

  @media (max-width: 820px) {
    margin-top: 2rem;
    width: 100%;

    /* flex-direction: column-reverse; */
  }

  @media (max-width: 769px) {
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

export const InnerBackButtonBox = styled.button`
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

  @media (max-width: 680px) {
    display: none;
  }
`

export const TextContainer = styled.div`
  padding: 0 2rem 0 0;
  max-height: 500px;
  width: 100%;
  overflow-y: hidden;

  @media (max-width: 1180px) {
    padding: 0;
    max-height: 220px;
    margin-bottom: 1rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
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

  @media (max-width: 769px) {
    width: 70%;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 1180px) {
    flex-direction: column;
    margin-top: 24rem;
    width: 100%;
  }

  @media (max-width: 769px) {
    flex-direction: column;
    margin-top: 2rem;
    width: 100%;
  }
`
