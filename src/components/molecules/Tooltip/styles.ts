import styled, { keyframes } from 'styled-components'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ColorThemeType } from '@/core/constants/theme'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

interface ITooltip {
  backgroundColor: ColorThemeType
}

export const IconButton = styled.button<ITooltip>`
  all: unset;
  border-radius: 25px;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
    transition: 0.2s ease all;
  }
`

export const ToolTipContent = styled(TooltipRadix.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  user-select: none;
  margin-bottom: 0.5rem;
  animation-duration: 400ms;

  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }

    &[data-side='right'] {
      animation-name: ${slideLeftAndFade};
    }

    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }

    &[data-side='left'] {
      animation-name: ${slideRightAndFade};
    }
  }
`

export const TooltipArrow = styled(TooltipRadix.Arrow)`
  fill: ${({ theme }) => theme.colors.white};
`
