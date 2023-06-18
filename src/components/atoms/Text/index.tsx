import * as S from './styles'
import {
  ColorThemeType,
  TextFontSize,
  WeightFont,
} from '@/core/constants/theme'
import { HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextFontSize
  color?: ColorThemeType
  weight?: WeightFont
  uppercase?: boolean
  as?: string | React.ComponentType<any>
  children: React.ReactNode
}

export function Text({
  size = 'md',
  color = 'black',
  weight = 'regular',
  uppercase = false,
  as,
  children,
  ...props
}: TextProps) {
  return (
    <S.Text
      as={as}
      size={size}
      color={color}
      weight={weight}
      uppercase={uppercase}
      {...props}
    >
      {children}
    </S.Text>
  )
}
