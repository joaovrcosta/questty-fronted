import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import starIcon from '../../../assets/star.svg'
import { BiShieldAlt2 } from 'react-icons/bi'
import { Avatar } from '@/components/atoms/Avatar'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { MdVerified } from 'react-icons/md'
import api from '@/services/api'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useState } from 'react'

interface Answer {
  id: string
  content: string
  author?: string
  createdAt: string
  isGolden?: boolean
  likesQuantity?: number
}

export function AnswerBox({
  id,
  content,
  createdAt,
  author,
  likesQuantity,
  isGolden,
}: Answer) {
  const { token } = useAuthStore()
  const [likesTotal, setLikesTotal] = useState(likesQuantity) // Mova a declaração aqui

  function handleLikeClick() {
    if (!token) {
      console.error('Token de autenticação não encontrado')
      return
    }

    api
      .post(`/likes/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Like dado com sucesso:', response.data)

        // Atualize likesTotal usando setLikesTotal
        setLikesTotal(likesTotal! + 1)
      })
      .catch((error) => {
        console.error('Erro ao dar like:', error)
      })
  }
  return (
    <S.AnswerWrapper>
      <S.AvatarContainer>
        <Avatar
          variant="lg"
          imageUrl="https://avatars.githubusercontent.com/u/70654718?v=4"
        />
      </S.AvatarContainer>
      <S.AnswerBoxContainer isGolden={isGolden ?? false}>
        <S.AnswerInfo>
          <S.AnswerInfoWrapperContainer>
            <S.AnswerInfoWrapper>
              <S.QuestionInfo>
                <S.Username>
                  <Text weight="medium">{author}</Text>
                </S.Username>
                {/* <S.UserLevel>183</S.UserLevel> */}
              </S.QuestionInfo>
              <S.CreatedAtContainer>
                <Text size="xs" style={{ fontFamily: 'Inter' }}>
                  {getTimeAgo(createdAt)}
                </Text>
              </S.CreatedAtContainer>
            </S.AnswerInfoWrapper>
            {/* <S.UserSubInfosContainer>
              <S.UserTag size="xs" weight="bold">
                PROPLAYER
              </S.UserTag>
              <S.AnswerViews size="xs">105 Visualizações</S.AnswerViews>
            </S.UserSubInfosContainer> */}
          </S.AnswerInfoWrapperContainer>
          <S.AnswerRateContainer>
            {isGolden && (
              <S.BestAnswerStamp>
                <Text size="xs" weight="bold" color="blue_950">
                  MELHOR RESPOSTA
                </Text>
                <MdVerified size={20} color="#10162F" />
              </S.BestAnswerStamp>
            )}
            <S.StarsRating>
              <Image src={starIcon} alt="" />
              <Text weight="bold">{likesTotal}</Text>
            </S.StarsRating>
            {/* <S.CrownNumberContainer>
              <S.CrownNumber weight="bold">4,1</S.CrownNumber>
            </S.CrownNumberContainer> */}
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
            onClick={handleLikeClick}
          >
            Valeu
            <Image src={starIcon} alt="" />
            <Text weight="bold">{likesTotal}</Text>
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
