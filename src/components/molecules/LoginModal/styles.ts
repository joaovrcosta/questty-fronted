import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'

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
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  max-height: 980px;
  border-radius: 5px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  max-width: 400px;

  @media (max-width: 378px) {
    max-width: 350px;
  }
`

export const EnterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const EmailInputContainer = styled.div``

export const InputContainer = styled.div``

export const FormContainer = styled.form``

export const ButtonContainer = styled.div`
  margin: 1rem 0 0rem 0;
`
export const ForgotMyPasswordLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.sm};
  color: ${({ theme }) => theme.colors.blue_600};
  font-weight: 600;
  text-decoration: none;
`
export const DontHaveAccountContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const EnterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue_500};
  margin-left: 0.25rem;
  font-weight: 600;
`
