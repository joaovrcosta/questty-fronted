import { ColorThemeType } from '@/core/constants/theme'
import styled, { css } from 'styled-components'

export type sizeVariants = 'sm' | 'md' | 'lg'
export type variants = 'primary' | 'secondary'

interface ISpinner {
  size: sizeVariants
  baseColor: ColorThemeType
}

export const PrimarySpinner = styled.span<ISpinner>`
  ${({ size }) => {
    if (size === 'sm') {
      return css`
        width: 32px;
        height: 32px;
        border-width: 2px;
      `
    } else if (size === 'lg') {
      return css`
        width: 64px;
        height: 64px;
        border-width: 4px;
      `
    } else {
      // Default size (md)
      return css`
        width: 48px;
        height: 48px;
      `
    }
  }}

  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #fff #fff transparent transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after,
  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px solid;
    ${({ theme, baseColor }) => css`
      border-color: transparent transparent ${theme.colors[baseColor]}
        ${theme.colors[baseColor]};
    `}
    ${({ size }) => {
      if (size === 'sm') {
        return css`
          width: 24px;
          height: 24px;
          border-width: 2px;
        `
      } else if (size === 'lg') {
        return css`
          width: 56px;
          height: 56px;
          border-width: 4px;
        `
      } else {
        // Default size (md)
        return css`
          width: 40px;
          height: 40px;
        `
      }
    }}
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotationBack 0.5s linear infinite;
    transform-origin: center center;
  }

  &::before {
    ${({ size }) => {
      if (size === 'sm') {
        return css`
          width: 16px;
          height: 16px;
          border-width: 2px;
        `
      } else if (size === 'lg') {
        return css`
          width: 48px;
          height: 48px;
          border-width: 4px;
        `
      } else {
        // Default size (md)
        return css`
          width: 32px;
          height: 32px;
        `
      }
    }}
    border-color: #fff #fff transparent transparent;
    animation: rotation 1.5s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`

export const SecondarySpinner = styled.span<ISpinner>`
  ${({ size }) => {
    if (size === 'sm') {
      return css`
        width: 16px;
        height: 16px;
        border-width: 2px;
        border: 2px solid;
      `
    } else if (size === 'lg') {
      return css`
        width: 48px;
        height: 48px;
        border-width: 4px;
        border: 4px solid;
      `
    } else {
      // Default size (md)
      return css`
        width: 32px;
        height: 32px;
        border: 3px solid;
      `
    }
  }}

  ${({ theme, baseColor }) => css`
    border-color: transparent transparent ${theme.colors[baseColor]}
      ${theme.colors[baseColor]};
  `}
  
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
