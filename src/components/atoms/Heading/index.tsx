import * as S from './styles'
import {
  ColorThemeType,
  TitleFontSize,
  WeightFont,
} from '@/core/constants/theme'
import { HTMLAttributes } from 'react'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: TitleFontSize
  color?: ColorThemeType
  weight?: WeightFont
  uppercase?: boolean
  as?: string | React.ComponentType<any>
  children: React.ReactNode
}

export function Heading({
  size = 'md',
  color = 'gray_100',
  weight = 'regular',
  uppercase = false,
  as,
  children,
  ...props
}: HeadingProps) {
  return (
    <S.Heading
      as={as}
      size={size}
      color={color}
      weight={weight}
      uppercase={uppercase}
      {...props}
    >
      {children}
    </S.Heading>
  )
}
