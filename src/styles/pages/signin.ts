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
      padding: 0 1.5rem;
      margin-top: 9rem;
    }
  `}
`

export const SignInContent = styled.div`
  max-width: 374px;
  margin: 0 auto;
  margin-top: 1rem;
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
  margin: 1rem 0 0rem 0;
`

export const EmailInputContainer = styled.div`
  margin-bottom: 1rem;
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

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SubTitle = styled.div`
  text-align: center;
`
