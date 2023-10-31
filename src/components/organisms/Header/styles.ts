import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Button } from '@/components/atoms/Button'
import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'

interface IHeader {
  isfixed?: boolean
}

interface ContentProps {
  existsToken?: boolean
}

export const HeaderContainer = styled.div<IHeader>`
  background-color: ${({ theme }) => theme.colors.primary};
  /* margin-bottom: 5rem; */
  margin-right: calc(-16px);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
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
  gap: 1.5em; //Spacing Items

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 1.5rem;
      padding: 1rem 1.5rem 1rem 1.5rem;
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      gap: 0;
      padding: 0.5rem 1rem;
    }
  `}
`

export const FirstBoxContent = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`

export const MakeQuestionButton = styled.div``

export const LogoImage = styled(Image)`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 72px;
      /* margin-right: 1rem; */
    }
  `}
`

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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

export const AvatarContainer = styled.div`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`

export const HeaderActionsContainer = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.existsToken ? 'none' : 'block')};
  }
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
  position: relative;

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      /* Estilos para telas até 1280px de largura */
    }
  `}

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none; /* Oculta o botão em telas até 768px de largura */
    }
  `}
`

export const ButtonDiv = styled.span`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Substitua pela cor desejada */
    border-radius: 50%;
    background: ${({ theme }) =>
      theme.colors.gray_100}; /* Substitua pela cor desejada */
    mix-blend-mode: lighten;
    transition: all 0.5s ease;
    transform-origin: center;
    transform: scale(0);
    z-index: 1;
  }

  &:hover::after {
    border-radius: 24px;
    transform: scale(1);
  }
`

export const SignUpButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};

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

  ${({ theme }) => css`
    @media (min-width: 768px) {
      display: none;
    }
  `}
`

export const SubHeaderContent = styled.div`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
`

export const SearchIcon = styled(BiSearch)`
  color: white;
`

export const SearchButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const SubSignInButton = styled(Button)`
  width: 10rem;

  /* @media (max-width: 400px) {
    width: 100%;
    width: 10rem;
  } */

  @media (max-width: 364px) {
    width: 100%;
  }
  /* @media (max-width: 280px) {
    font-size: 0.75rem;
  } */
`

export const SubSignUpButton = styled(Button)`
  width: 12.25rem;
  /* @media (max-width: 400px) {
    width: 97%;
  } */
  @media (max-width: 364px) {
    width: 100%;
  }
  /* @media (max-width: 310px) {
    width: 85%;
  } */
  /* @media (max-width: 280px) {
    width: 80%;
    font-size: 0.75rem;
  } */
`

export const PointsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
