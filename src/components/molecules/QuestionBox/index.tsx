import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { BiShieldAlt2 } from 'react-icons/bi'
import { PlusCircle } from '@phosphor-icons/react'
import Image from 'next/image'
import { Avatar } from '@/components/atoms/Avatar'
import { getTimeAgo } from '@/utils/getTimeAgo'

interface Question {
  id: number
  content: string
  createdAt: string
}

export function QuestionBox({ content, createdAt }: Question) {
  return (
    <S.QuestionWrapper>
      <S.AvatarContainer>
        <Avatar />
      </S.AvatarContainer>
      <S.QuestionBoxContainer>
        <S.QuestionInfo>
          <S.QuestionInfoWrapper>
            <S.AvatarInfoContainer>
              <Avatar />
            </S.AvatarInfoContainer>
            <S.Username>
              <Text style={{ fontFamily: 'Poppins' }} weight="medium">
                JujuR0drigues
              </Text>
            </S.Username>
            <S.UserLevel>27</S.UserLevel>
            <S.DateTimeText
              size="xs"
              weight="bold"
              style={{ fontFamily: 'Poppins', whiteSpace: 'nowrap' }}
            >
              {getTimeAgo(createdAt)}
            </S.DateTimeText>
          </S.QuestionInfoWrapper>
          <S.AnswerQuantityBox>
            <Text
              weight="bold"
              size="xl"
              color="blue_950"
              style={{ fontFamily: 'Poppins' }}
            >
              Respostas:
            </Text>
            <S.AnswerQuantity>
              <Text
                size="xx1"
                color="blue_500"
                style={{ fontFamily: 'Poppins' }}
              >
                2
              </Text>
            </S.AnswerQuantity>
          </S.AnswerQuantityBox>
        </S.QuestionInfo>
        <S.QuestionContent>
          <S.QuestionTitle>
            <S.QuestionTitleText
              size="xx1"
              weight="bold"
              color="blue_950"
            ></S.QuestionTitleText>
          </S.QuestionTitle>
          <S.QuestionContentText size="lg" weight="regular" color="blue_950">
            {content}
          </S.QuestionContentText>
        </S.QuestionContent>
        <S.UserHandleActionsContainer>
          <S.AnswerButton
            variant="lg"
            rounding="rounded-xxl"
            color="white"
            backgroundColor="blue_500"
          >
            <PlusCircle size={24} weight="bold" />
            RESPONDER
          </S.AnswerButton>
          <S.ModerationWrapper>
            <S.ModerateLabel>
              <BiShieldAlt2 size={24} color="#EBA900" />
              <S.ModerateLabelText size="lg" style={{ fontFamily: 'Poppins' }}>
                Moderar
              </S.ModerateLabelText>
            </S.ModerateLabel>
          </S.ModerationWrapper>
        </S.UserHandleActionsContainer>
        <S.MoreDetailsInputContainer>
          <S.MoreDetailsInput placeholder="Pedir detalhes sobre a pergunta" />
        </S.MoreDetailsInputContainer>
      </S.QuestionBoxContainer>
    </S.QuestionWrapper>
  )
}
