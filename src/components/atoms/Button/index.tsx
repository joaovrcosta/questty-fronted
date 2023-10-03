import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import { ColorThemeType } from '@/core/constants/theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: ColorThemeType
  borderColor?: ColorThemeType
  variant?: S.sizeVariants
  rounding?: S.roundingVariants
  color?: S.colorVariants
  boxShadow?: boolean
  border?: boolean
  hug?: boolean
  children: React.ReactNode
}

export function Button({
  backgroundColor = 'yellow_500',
  borderColor = 'black',
  variant = 'md',
  rounding = 'rounded-full',
  boxShadow = false,
  color = 'black',
  hug = false,
  border = true,
  children,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      rounding={rounding}
      variant={variant}
      boxShadow={boxShadow}
      hug={hug}
      color={color}
      border={border}
      {...props}
    >
      {children}
    </S.Button>
  )
}
