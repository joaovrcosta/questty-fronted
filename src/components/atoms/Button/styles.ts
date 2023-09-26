import { ColorThemeType } from '@/core/constants/theme'
import styled, { css } from 'styled-components'

export type roundingVariants =
  | 'rounded'
  | 'rounded-full'
  | 'rounded-none'
  | 'rounded-thin'
  | 'rounded-xxl'
export type sizeVariants = 'sm' | 'md' | 'lg' | 'none'
export type colorVariants = 'white' | 'black'

interface IButton {
  backgroundColor: ColorThemeType
  borderColor: ColorThemeType
  variant: sizeVariants
  rounding: roundingVariants
  hug: boolean
  boxShadow: boolean
  color: colorVariants
  border: boolean
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: ${({ theme }) => theme.typography.text.xs};
        padding: 0.5rem 1rem;
        height: 2.25rem;
      `
    case 'md':
      return css`
        font-size: ${({ theme }) => theme.typography.text.sm};
        padding: 0.65rem 1.5rem;
        height: 2.5rem;
      `
    case 'lg':
      return css`
        font-size: ${({ theme }) => theme.typography.text.md};
        padding: 0.65rem 2.5rem;
        height: 3rem;
      `
    case 'none':
      return css`
        font-size: ${({ theme }) => theme.typography.text.md};
        padding: 0;
        height: 35px;
      `
  }
}

export const Button = styled.button<IButton>`
  ${({ variant }) => sizeVariants(variant)}

  white-space: nowrap;

  cursor: pointer;
  border: ${({ border }) => (border ? `1px solid black` : 'none')};

  color: ${({ theme, color }) => theme.colors[color]};

  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};

  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '0.625rem'
      case 'rounded-full':
        return '9999px'
      case 'rounded-none':
        return '0'
      case 'rounded-thin':
        return '5px'
      case 'rounded-xxl':
        return '14px'
      default:
        return '0.25rem'
    }
  }};

  box-shadow: ${({ boxShadow }) =>
    boxShadow ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25);' : 'none'};

  ${({ hug }) =>
    css`
      width: ${!hug ? 'fit-content' : '100%'};
    `}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: 500;

  transition: 0.3s ease all;

  font-weight: bold;
  font-family: Poppins;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
