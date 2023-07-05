import Link from 'next/link'
import styled, { css } from 'styled-components'

export const SignInContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 12rem;
  margin-bottom: 6rem;
  font-family: Poppins;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  `}
`

export const SignInContent = styled.div`
  max-width: 374px;
  margin: 0 auto;
  margin-top: 2.5rem;
`

export const FormContainer = styled.form``

export const InputContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
`

export const ForgotMyPasswordLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.sm};
  color: ${({ theme }) => theme.colors.blue_600};
  font-weight: 600;
  text-decoration: none;
`

export const ButtonContainer = styled.div`
  margin: 3rem 0 2.75rem 0;
`

export const EnterWithContainer = styled.div``

// Social Auth

export const SocialAuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`

export const WithGoogle = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const WithFacebook = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const StayLoggedContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  gap: 0.5rem;
`
