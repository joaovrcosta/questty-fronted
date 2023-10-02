import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { Heading } from '@/components/atoms/Heading'
import { ColorThemeType } from '@/core/constants/theme'
import React from 'react'

interface CardProps {
  title: string
  description: string
  image?: React.ReactNode
  backgroundColor: ColorThemeType
  titleColor?: ColorThemeType
  descriptionColor: ColorThemeType
}

export function Card({
  title,
  description,
  image,
  backgroundColor,
  titleColor,
  descriptionColor,
}: CardProps) {
  return (
    <>
      <S.CardContainer backgroundColor={backgroundColor}>
        <S.ImageContainer>
          <S.Item>{image}</S.Item>
        </S.ImageContainer>
        <S.ContentContainer>
          <Heading color={titleColor} weight="bold" size="sm">
            {title}
          </Heading>
          <Text
            style={{ marginTop: '3rem' }}
            size="lg"
            color={descriptionColor}
          >
            {description}
          </Text>
        </S.ContentContainer>
      </S.CardContainer>
    </>
  )
}
