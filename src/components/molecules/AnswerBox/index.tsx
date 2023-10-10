import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import starIcon from '../../../assets/star.svg'
import { Avatar } from '@/components/atoms/Avatar'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { MdVerified } from 'react-icons/md'
import api from '@/services/api'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { use, useEffect, useState } from 'react'
import { AiOutlineFlag } from 'react-icons/ai'
import { Tooltip } from '../Tooltip'

interface Answer {
  id: string
  content: string
  author?: string
  createdAt: string
  isGolden?: boolean
  likesQuantity?: number
  isButtonDisabled: boolean
  authorId: string
}

export function AnswerBox({
  id,
  content,
  createdAt,
  author,
  authorId,
  likesQuantity,
  isGolden,
  isButtonDisabled,
}: Answer) {
  const { token } = useAuthStore()
  const [likesTotal, setLikesTotal] = useState(likesQuantity)
  const { user } = useAuthStore()
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.id) {
          const res = await api.get(`/likes/${user.id}/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (res.status === 200) {
            const data = res.data

            // Verifica se a pessoa curtiu com base na resposta do back-end
            setIsAlreadyLiked(data.liked === true)

            // Se o campo "liked" na resposta for verdadeiro, setResult(true), caso contrário, setResult(false)
          } else {
            console.log('Outro código de status:', res.status)
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Erro:', error.message)
        }
      }
    }

    fetchData()
  }, [id, token, user?.id])

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
      .then((res) => {
        setLikesTotal(likesTotal! + 1)
        setIsAlreadyLiked(true)
      })
      .catch((error) => {
        console.error('Erro ao dar like:', error)
      })
  }

  return (
    <S.AnswerWrapper>
      <S.AvatarContainer>
        <Avatar
          id={String(authorId)}
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
                <Tooltip content="Nível deste usuario">
                  <S.UserLevel>0</S.UserLevel>
                </Tooltip>
              </S.QuestionInfo>
              <S.CreatedAtContainer>
                <Text size="xs" style={{ fontFamily: 'Inter' }}>
                  {getTimeAgo(createdAt)}
                </Text>
              </S.CreatedAtContainer>
            </S.AnswerInfoWrapper>
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
            disabled={isAlreadyLiked || isButtonDisabled}
          >
            Valeu
            <Image src={starIcon} alt="" />
            <Text weight="bold">{likesTotal}</Text>
          </S.LikedButton>
          <S.ModerationWrapper>
            <Tooltip content="Denunciar">
              <S.ModerateLabel>
                <AiOutlineFlag size={24} color="#10162f" />
                {/* <Text size="lg">Moderar</Text> */}
              </S.ModerateLabel>
            </Tooltip>
          </S.ModerationWrapper>
        </S.UserHandleActionsContainer>
      </S.AnswerBoxContainer>
    </S.AnswerWrapper>
  )
}
