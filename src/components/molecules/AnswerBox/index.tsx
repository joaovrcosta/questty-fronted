import Image from 'next/image'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'

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
          <S.AnswerInfoWrapper>
            <S.Username>
              <Text weight="medium">JujuR0drigues</Text>
            </S.Username>
            <S.UserLevel>27</S.UserLevel>
            <Text size="xs">12/11/21 às 11:26</Text>
          </S.AnswerInfoWrapper>
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
      </S.AnswerBoxContainer>
    </S.AnswerWrapper>
  )
}
