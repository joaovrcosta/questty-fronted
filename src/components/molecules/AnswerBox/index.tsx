import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import starIcon from '../../../assets/star.svg'
import { BiShieldAlt2 } from 'react-icons/bi'
import { Avatar } from '@/components/atoms/Avatar'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { CheckCircle } from '@phosphor-icons/react'

interface Answer {
  id: number
  content: string
  createdAt: string
  isGolden?: boolean
  thanks: number
}

export function AnswerBox({
  id,
  content,
  createdAt,
  isGolden,
  thanks,
}: Answer) {
  return (
    <S.AnswerWrapper>
      <S.AvatarContainer>
        <Avatar />
      </S.AvatarContainer>
      <S.AnswerBoxContainer isGolden={isGolden ?? false}>
        <S.AnswerInfo>
          <S.AnswerInfoWrapperContainer>
            <S.AnswerInfoWrapper>
              <S.Username>
                <Text weight="medium">rodrigolopes</Text>
              </S.Username>
              <S.UserLevel>183</S.UserLevel>
              <S.CreatedAtContainer>
                <Text size="xs" style={{ fontFamily: 'Poppins' }}>
                  {getTimeAgo(createdAt)}
                </Text>
              </S.CreatedAtContainer>
            </S.AnswerInfoWrapper>
            <S.UserSubInfosContainer>
              <S.UserTag size="xs" weight="bold">
                PROPLAYER
              </S.UserTag>
              <S.AnswerViews size="xs">105 Visualizações</S.AnswerViews>
            </S.UserSubInfosContainer>
          </S.AnswerInfoWrapperContainer>
          <S.AnswerRateContainer>
            {isGolden && (
              <S.BestAnswerStamp>
                <Text size="xs" weight="bold">
                  MELHOR RESPOSTA
                </Text>
                <CheckCircle size={24} />
              </S.BestAnswerStamp>
            )}
            <S.StarsRating>
              <Image src={starIcon} alt="" />
              <Text weight="bold">{thanks}</Text>
            </S.StarsRating>
            <S.CrownNumberContainer>
              <S.CrownNumber weight="bold">4,1</S.CrownNumber>
            </S.CrownNumberContainer>
          </S.AnswerRateContainer>
        </S.AnswerInfo>
        <S.AnswerContent>
          <S.AnswerContentText size="lg" weight="regular" color="blue_950">
            {content}
          </S.AnswerContentText>
        </S.AnswerContent>
        <S.UserHandleActionsContainer>
          <S.LikedButton
            variant="none"
            rounding="rounded-full"
            color="black"
            backgroundColor="white"
          >
            Valeu
            <Image src={starIcon} alt="" />
            <Text weight="bold">{thanks}</Text>
          </S.LikedButton>
          <S.ModerationWrapper>
            <S.ModerateLabel>
              <BiShieldAlt2 size={24} color="#EBA900" />
              <Text size="lg">Moderar</Text>
            </S.ModerateLabel>
          </S.ModerationWrapper>
        </S.UserHandleActionsContainer>
      </S.AnswerBoxContainer>
    </S.AnswerWrapper>
  )
}
