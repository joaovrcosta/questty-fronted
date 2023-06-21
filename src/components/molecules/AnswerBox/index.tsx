import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import starIcon from '../../../assets/star.svg'
import { BiShieldAlt2 } from 'react-icons/bi'
export function AnswerBox() {
  return (
    <S.AnswerWrapper>
      <S.UserAvatarContainer>
        <Image
          src="https://avatars.githubusercontent.com/u/70654718?v=4"
          alt=""
          width={48}
          height={48}
          style={{ borderRadius: '50%' }}
        />
      </S.UserAvatarContainer>
      <S.AnswerBoxContainer>
        <S.AnswerInfo>
          <S.AnswerInfoWrapperContainer>
            <S.AnswerInfoWrapper>
              <S.Username>
                <Text weight="medium">rodrigolopes</Text>
              </S.Username>
              <S.UserLevel>183</S.UserLevel>
              <Text size="xs" style={{ fontFamily: 'Poppins' }}>
                12/11/21 às 11:26
              </Text>
            </S.AnswerInfoWrapper>
            <S.UserSubInfosContainer>
              <S.UserTag size="xs" weight="bold">
                PROPLAYER
              </S.UserTag>
              <S.AnswerViews size="xs">105 Visualizações</S.AnswerViews>
            </S.UserSubInfosContainer>
          </S.AnswerInfoWrapperContainer>
          <S.AnswerRateContainer>
            <S.StarsRating>
              <Image src={starIcon} alt="" />
              <Text weight="bold">92</Text>
            </S.StarsRating>
            <S.CrownNumberContainer>
              <S.CrownNumber weight="bold">4,1</S.CrownNumber>
            </S.CrownNumberContainer>
          </S.AnswerRateContainer>
        </S.AnswerInfo>
        <S.AnswerContent>
          <S.QuestionTitleText size="lg" weight="regular" color="blue_950">
            I. A propriedade dos dados não é da organização que contratou o
            serviço. II. É necessário ter uma conexão rápida e estável, caso
            contrário será desfavorável no aproveitamento absoluto da
            tecnologia. III. Pode gerar desconfiança ao manter as informações em
            um ambiente virtual. IV. Rapidez na manipulação e no acesso à
            informação. É correto apenas o que se afirma em: a. I, III e IV. b.
            I e III. c. II e IV. I. A propriedade dos dados não é da organização
            que contratou o serviço. II. É necessário ter uma conexão rápida e
            estável, caso contrário será desfavorável no aproveitamento absoluto
            da tecnologia. III. Pode gerar desconfiança ao manter as informações
            em um ambiente virtual. IV. Rapidez na manipulação e no acesso à
            informação. É correto apenas o que se afirma em: a. I, III e IV. b.
            I e III. c. II e IV.
          </S.QuestionTitleText>
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
            <Text weight="bold">92</Text>
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
