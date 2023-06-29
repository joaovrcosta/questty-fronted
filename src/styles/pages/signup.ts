import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled, { css } from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 12rem;
  margin-bottom: 8rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  `}
`

export const SignUpContent = styled.div`
  max-width: 374px;
  margin: 0 auto;
  margin-top: 2.5rem;
`

export const FormContainer = styled.form``

export const InputContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`

export const TermsAndPolicies = styled(Text)`
  font-size: ${({ theme }) => theme.typography.text.sm};
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 1.75rem;
  font-family: Poppins;
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
export const RegisterButton = styled(Button)`
  &:hover {
    opacity: 0.8;
  }
`
