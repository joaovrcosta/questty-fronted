import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'

export function QuestionCard() {
  return (
    <S.QuestionCardContainer>
      <S.QuestionContentContainer>
        <S.QuestionContent>
          <S.UserAvatarContainer>
            <Image
              src="https://avatars.githubusercontent.com/u/70654718?v=4"
              alt=""
              width={48}
              height={48}
              style={{ borderRadius: '50%' }}
            />
          </S.UserAvatarContainer>
          <S.QuestionInfo>
            <S.QuestionText>
              Uma professora do curso de Administração de uma determinada
              faculdade conduz um estudo para determinar se existe uma relação
              linear entre...
            </S.QuestionText>
            <S.SubjectAndDateTimeContainer>
              <S.Subject size="xs" color="gray_800">
                Matematica
              </S.Subject>
              <S.DateTime size="xs" color="gray_800">
                09/06/23 às 15:58
              </S.DateTime>
            </S.SubjectAndDateTimeContainer>
          </S.QuestionInfo>
        </S.QuestionContent>
        <S.UserHandleContainer>
          <S.AswerContainer>
            <S.AnswerButtonContainer>
              <S.AnswerButton backgroundColor="white" variant="sm">
                RESPONDER
              </S.AnswerButton>
            </S.AnswerButtonContainer>
          </S.AswerContainer>
          <S.AnswerQuantity>
            <Text
              weight="semibold"
              color="blue_550"
              style={{ whiteSpace: 'nowrap', fontFamily: 'Poppins' }}
            >
              1 resposta
            </Text>
          </S.AnswerQuantity>
        </S.UserHandleContainer>
      </S.QuestionContentContainer>
    </S.QuestionCardContainer>
  )
}
