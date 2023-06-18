import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'
import { ColorThemeType } from '@/core/constants/theme'

export type sizeVariants = 'md' | 'lg'

interface InputProps {
  background: ColorThemeType
  sizeOf: sizeVariants
  hasIcon?: boolean
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'md':
      return css`
        padding: 0 0.5rem;
      `
    case 'lg':
      return css`
        padding: 0 0.75rem;
      `
  }
}

const baseProps = css<InputProps>`
  width: 100%;
  width: -webkit-fill-available;
  outline: none;
  border: 1px solid transparent;

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 0 0.75rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0 0.5rem;
    `}


  ${({ hasIcon }) =>
    hasIcon
      ? css`
          border-radius: 0 4px 4px 0px;
        `
      : css`
          /* border-radius: 8px; */
        `}

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    border: 1px solid transparent;
    color: ${theme.colors.gray_900};
    font-size: ${theme.typography.text.xs};
    font-weight: ${theme.typography.weight.medium};
    border: 1px solid ${theme.colors.black};
  `}

  &:disabled {
    cursor: text;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_800};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue_600};
  }

  display: block;
  height: 100%;
  height: -webkit-fill-available;

  transition: 0.3s ease all;
`

export const Input = styled.input<InputProps>`
  ${baseProps}

  ${({ sizeOf }) =>
    sizeOf == 'lg' &&
    css`
      padding: 1rem;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'md' &&
    css`
      padding: 0.5rem;
    `}
`

interface InputBoxInterface {
  hasError: boolean
  hug?: boolean
}

export const InputBox = styled.div<InputBoxInterface>`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 1.5rem !important;
    `}
`

export const InputWithMask = styled(InputMask)<InputProps>`
  ${baseProps}
`

export const InputError = styled.div`
  position: absolute;
  margin-top: 0.25rem;

  color: red;
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

interface InputContainerInterface {
  hug?: boolean
  sizeOf: sizeVariants
}

export const InputContainer = styled.div<InputContainerInterface>`
  display: flex;
  align-items: center;
  height: 100%;

  width: 200px;

  ${({ hug }) => {
    if (hug) {
      return css`
        width: 100%;
        max-width: 780px;
      `
    }
  }}
`

export const PlaceholderIcon = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 0.75rem;

  /* border-radius: 4px 0 0 4px; */

  height: 100%;

  color: white;

  transition: 0.3s ease all;
`

export const InputLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.text.sm};
`
