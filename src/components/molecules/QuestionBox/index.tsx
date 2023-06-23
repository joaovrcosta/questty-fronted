import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { BiShieldAlt2 } from 'react-icons/bi'
import { PlusCircle, Eye } from '@phosphor-icons/react'
import Image from 'next/image'
import { Avatar } from '@/components/atoms/Avatar'
import { getTimeAgo } from '@/utils/getTimeAgo'
import { useContextSelector } from 'use-context-selector'
import { QuestionContext } from '@/contexts/QuestionsContext'

interface Question {
  id: number
  content: string
  createdAt: string
  answersQuantity: number
}

export function QuestionBox({
  id,
  content,
  createdAt,
  answersQuantity,
}: Question) {
  const questions = useContextSelector(QuestionContext, (context) => {
    return context.questions
  })

  const answerCount = questions.filter((question) => question.id === id)[0]
    ?.answers.length
  const hasThreeOrMoreAnswers = answerCount >= 3
  const limitedAnswerCount = Math.min(answerCount, 3)

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
            <S.InfoWrapperr>
              <S.UserInfo>
                <S.Username>
                  <Text style={{ fontFamily: 'Poppins' }} weight="medium">
                    joaovrcosta
                  </Text>
                </S.Username>
                <S.UserLevel>27</S.UserLevel>
              </S.UserInfo>
              <S.DateTimeText
                size="xs"
                weight="regular"
                style={{ fontFamily: 'Inter', whiteSpace: 'nowrap' }}
              >
                {getTimeAgo(createdAt)}
              </S.DateTimeText>
            </S.InfoWrapperr>
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
                weight="bold"
                color="blue_500"
                style={{ fontFamily: 'Poppins' }}
              >
                {answersQuantity}
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
            {content.length > 380 ? (
              <>
                <Text size="xx1" weight="bold">
                  {content.slice(0, 380)} ...
                </Text>
                <div style={{ marginTop: '16px', fontSize: '18px' }}>
                  {content.slice(380)}
                </div>
              </>
            ) : (
              content
            )}
          </S.QuestionContentText>
        </S.QuestionContent>
        <S.UserHandleActionsContainer>
          {hasThreeOrMoreAnswers ? (
            <S.SeeAnswerButton
              variant="lg"
              rounding="rounded-xxl"
              color="white"
              backgroundColor="black"
            >
              <Eye size={24} weight="bold" />
              <Text color="white" weight="medium">
                VER {limitedAnswerCount} RESPOSTAS
              </Text>
            </S.SeeAnswerButton>
          ) : (
            <S.AnswerButton
              variant="lg"
              rounding="rounded-xxl"
              color="white"
              backgroundColor="blue_500"
            >
              <PlusCircle size={24} weight="bold" />
              RESPONDER
            </S.AnswerButton>
          )}
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
