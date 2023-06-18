import { ColorThemeType } from '@/core/constants/theme'
import styled, { css } from 'styled-components'
// import { darken } from 'polished'
import Link from 'next/link'

export type roundingVariants = 'rounded' | 'rounded-full' | 'rounded-none'
export type sizeVariants = 'sm' | 'md' | 'lg'
export type colorVariants = 'white' | 'black'

interface IButton {
  backgroundColor: ColorThemeType
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

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '0.25rem'
      case 'rounded-full':
        return '9999px'
      case 'rounded-none':
        return '0'
      default:
        return '0.25rem'
    }
  }};

  box-shadow: ${({ boxShadow }) =>
    boxShadow ? '0px 1px 10px 0px rgba(0, 0, 0, 0.25)' : 'none'};

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

  &:hover {
    background: rgba(241, 241, 241, 0.7);
  }

  font-weight: bold;
`
