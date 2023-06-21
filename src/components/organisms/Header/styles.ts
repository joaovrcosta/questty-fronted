import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'

interface IHeader {
  isfixed?: boolean
}

export const HeaderContainer = styled.div<IHeader>`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      width: 100%;
    }
  `}
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 0 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem; //Spacing Items

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 0;
      padding: 1.5rem 1rem 1.5rem 1rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      gap: 0;
      padding: 0.5rem 1rem;
    }
  `}
`

export const LogoImage = styled(Image)`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 72px;
      margin-right: 1rem;
    }
  `}
`

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  outline: none;

  &:focus {
    border: 1px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }
`

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
`

export const StyledButton = styled(Button)`
  &:hover {
    background-color: #eaece1;
    transition: 0.3s ease all;
  }
`

export const MakeYourQuestionButton = styled(Button)`
  &:hover {
    background-color: #eaece1;
    transition: 0.3s ease all;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const SignInButton = styled(Button)`
  &:hover {
    background-color: #eaece1;
    transition: 0.3s ease all;
  }

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      display: none;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const SignUpButton = styled(Button)`
  &:hover {
    background-color: #eaece1;
    transition: 0.3s ease all;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const SubHeader = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ theme }) => css`
    @media (min-width: 768px) {
      display: none;
    }
  `}
`

export const SubHeaderContent = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1.5rem 5rem 1.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
