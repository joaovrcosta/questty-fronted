import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 999999;
`

export const Content = styled(Dialog.Content)`
  max-width: 37.5rem;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  padding: 1.5rem 2rem 2.5rem 2rem;
  z-index: 999999;
  max-height: 42rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 769px) {
    padding: 1rem 1rem 2rem 1rem;
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

export const LoginContainerContent = styled.div`
  padding: 0 2rem;
  max-width: 100%;

  @media (max-width: 769px) {
    padding: 1rem 1rem 0 1rem;
  }
`

export const EnterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* max-width: 400px; */
`

export const EmailInputContainer = styled.div``

export const InputContainer = styled.div``

export const FormContainer = styled.form`
  gap: 1rem;
`

export const ButtonContainer = styled.div`
  margin: 1rem 0 0rem 0;
`
export const ForgotMyPasswordLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.sm};
  color: ${({ theme }) => theme.colors.blue_500};
  font-weight: 600;
  text-decoration: none;
`
export const DontHaveAccountContainer = styled.div`
  padding: 1rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const EnterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue_500};
  margin-left: 0.25rem;
  font-weight: 600;
`
export const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 1rem 0;

  button {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.gray_100};
    }
  }

  @media (max-width: 769px) {
    padding: 0 1rem;
  }
`
