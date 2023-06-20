import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { BiShieldAlt2 } from 'react-icons/bi'
import { PlusCircle } from '@phosphor-icons/react'
import Image from 'next/image'

export function QuestionBox() {
  return (
    <S.QuestionWrapper>
      <S.UserAvatarContainer>
        <Image
          src="https://avatars.githubusercontent.com/u/70654718?v=4"
          alt=""
          width={48}
          height={48}
          style={{ borderRadius: '50%' }}
        />
      </S.UserAvatarContainer>
      <S.QuestionBoxContainer>
        <S.QuestionInfo>
          <S.QuestionInfoWrapper>
            <S.Username>
              <Text weight="medium">JujuR0drigues</Text>
            </S.Username>
            <S.UserLevel>27</S.UserLevel>
            <Text size="xs">12/11/21 às 11:26</Text>
          </S.QuestionInfoWrapper>
          <S.AnswerQuantityBox>
            <Text weight="bold" size="xl" color="blue_950">
              Respostas:
            </Text>
            <S.AnswerQuantity>
              <Text size="xx1" color="blue_500">
                2
              </Text>
            </S.AnswerQuantity>
          </S.AnswerQuantityBox>
        </S.QuestionInfo>
        <S.QuestionContent>
          <S.QuestionTitle>
            <S.QuestionTitleText size="xx1" weight="bold" color="blue_950">
              Computação em nuvem (Cloud Computing) é um conceito que utiliza
              uma rede de computadores interligados pela internet, usufruindo da
              capacidade de armazenamento, da memória e da velocidade de
              cálculos que esses servidores possuem quando estão interligados e
              compartilhados.{' '}
            </S.QuestionTitleText>
          </S.QuestionTitle>
          <S.QuestionContentText>
            <S.QuestionTitleText size="lg" weight="regular" color="blue_950">
              I. A propriedade dos dados não é da organização que contratou o
              serviço. II. É necessário ter uma conexão rápida e estável, caso
              contrário será desfavorável no aproveitamento absoluto da
              tecnologia. III. Pode gerar desconfiança ao manter as informações
              em um ambiente virtual. IV. Rapidez na manipulação e no acesso à
              informação. É correto apenas o que se afirma em: a. I, III e IV.
              b. I e III. c. II e IV. I. A propriedade dos dados não é da
              organização que contratou o serviço. II. É necessário ter uma
              conexão rápida e estável, caso contrário será desfavorável no
              aproveitamento absoluto da tecnologia. III. Pode gerar
              desconfiança ao manter as informações em um ambiente virtual. IV.
              Rapidez na manipulação e no acesso à informação. É correto apenas
              o que se afirma em: a. I, III e IV. b. I e III. c. II e IV.
            </S.QuestionTitleText>
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
              <Text size="lg">Moderar</Text>
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
