import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'

interface IHeader {
  isfixed?: boolean
  isScrolled?: boolean
}

export const HeaderContainer = styled.div<IHeader>`
  background: transparent;
  /* margin-bottom: 5rem; */
  margin-right: calc(-16px);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 94px;

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      width: 100%;
    }
  `}

  .scrolled {
    background-color: #fff;
  }

  &.--scrolled {
    transition: 0.3s ease all;

    background-color: transparent;
    border-radius: 16px;
    height: 72px;
    margin-top: 16px;
  }
`

export const HeaderContent = styled.div<IHeader>`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  ${({ isScrolled, theme }) =>
    isScrolled
      ? css`
          padding: 1rem;
        `
      : css`
          padding: 1rem;
        `}

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem; // Spacing Items

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 0;
      padding: 1.5rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      gap: 0;
      padding: 16px;
    }
  `}

  &.--scrolled {
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 8px 32px 0 rgba(50, 60, 69, 0.2);
  }
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
  margin-left: 1rem;
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  flex: 1;
  padding: 0.625rem 1.5rem;
  font-family: Poppins;
  background: transparent;
  border-radius: 46px 0 0 46px;

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
  gap: 1rem;
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
    background-color: ${({ theme }) => theme.colors.gray_100};
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
    background-color: ${({ theme }) => theme.colors.gray_100};
    transition: 0.3s ease all;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const SignUpButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.9;
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

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

export const SearchIcon = styled(BiSearch)`
  color: white;
`

export const SearchButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
export const ButtonsMobileContainer = styled.div`
  display: none;
  font-family: 'Poppins';
  gap: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavigationButton = styled.button<IHeader>`
  background-color: transparent;
  border: none;
  margin-left: 8px;
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &.--scrolled {
    svg {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
