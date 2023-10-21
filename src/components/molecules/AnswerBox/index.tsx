import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { Avatar } from '@/components/atoms/Avatar'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { MdVerified } from 'react-icons/md'
import api from '@/services/api'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useEffect, useState } from 'react'
import { AiOutlineFlag } from 'react-icons/ai'
import { Tooltip } from '../Tooltip'
import { AiFillHeart } from 'react-icons/ai'

interface Answer {
  id: string
  content: string
  author?: string
  createdAt: string
  isGolden?: boolean
  likesQuantity?: number
  isButtonDisabled: boolean
  authorId: string
  avatarUrl?: string
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
  avatarUrl,
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

            setIsAlreadyLiked(data.liked === true)
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
          imageUrl={avatarUrl ? avatarUrl : null}
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
                {/* <Tooltip content="Nível deste usuario">
                  <S.UserLevel>0</S.UserLevel>
                </Tooltip> */}
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
                <Text size="xs" weight="bold" color="white">
                  MELHOR RESPOSTA
                </Text>
                <MdVerified size={20} color="#fff" />
              </S.BestAnswerStamp>
            )}
            <S.StarsRating>
              <S.hearthIconCSS size={24}></S.hearthIconCSS>
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
            rounding="rounded"
            color="black"
            backgroundColor="white"
            onClick={handleLikeClick}
            disabled={isAlreadyLiked || isButtonDisabled}
          >
            Valeu
            {isAlreadyLiked ? (
              <S.hearthIconCSS></S.hearthIconCSS>
            ) : (
              <S.HeartIconOutline></S.HeartIconOutline>
            )}
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

        <S.MoreDetailsInputContainer>
          <Avatar
            variant="sm"
            imageUrl={user?.avatar_url ? user?.avatar_url : null}
          />
          <S.MoreDetailsInput placeholder={`Escreva seu comentário`} />
        </S.MoreDetailsInputContainer>
      </S.AnswerBoxContainer>
    </S.AnswerWrapper>
  )
}
