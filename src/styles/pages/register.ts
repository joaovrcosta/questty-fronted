import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import Link from 'next/link'
import styled from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 8rem;

  @media (max-width: 769px) {
    padding: 0 1.5rem;
    margin-top: 6rem;
  }
`

export const SignUpContent = styled.div`
  max-width: 374px;
  margin: 0 auto;
  margin-top: 2.5rem;
`
export const InputContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 440px) {
    margin-top: 1.5rem;
  }
`

export const TermsAndPolicies = styled(Text)`
  font-size: ${({ theme }) => theme.typography.text.sm};
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 1.75rem;
  font-family: Poppins;
  text-align: center;
`

export const ButtonContainer = styled.div`
  margin: 1rem 0 0rem 0;
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

export const BackLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.blue_950};
`
export const BackLinkText = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue_500};
`

export const PolicyPrivacy = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.text.sm};
  font-family: 'Poppins';
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue_500};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.blue_550};
  }
`
export const Terms = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.text.sm};
  font-family: 'Poppins';
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue_500};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.blue_550};
  }
`
export const ErrorContainer = styled.div`
  background-color: rgba(210, 0, 50, 0.3);
  border-radius: 6px;
  padding: 1rem;
`
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`
export const GenderSelectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  & > select {
    height: 54px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 100%;
    min-width: 154px;
    font-family: Poppins;
  }

  & > label {
    font-family: Poppins;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.text.sm};
  }
`

export const GradeSelectionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  & > select {
    height: 54px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 100%;
    min-width: 154px;
    font-family: Poppins;
  }

  & > label {
    font-family: Poppins;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.text.sm};
  }
`

export const DateBirthContainer = styled.div`
  & > label {
    font-family: Poppins;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.text.sm};
    margin-bottom: 3px;
  }
`

export const DateBirthInput = styled.input`
  height: 54px;
  border: 1px solid #000;
  width: 100%;
  padding: 0rem 1rem;
  font-family: Poppins;
`
