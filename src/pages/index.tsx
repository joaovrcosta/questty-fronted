import { NextPageWithLayout } from './_app'
import DefaultLayout from '@/components/templates/Default'
import { ReactElement } from 'react'
import { Heading } from '@/components/atoms/Heading'
import * as S from '@/styles/pages/index'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'

const Landing: NextPageWithLayout = () => {
  return (
    <>
      <S.LandingContent>
        <S.LandingContainer>
          <S.HeroContainer>
            <S.HeroHeading>
              <Heading color="blue_950" size="xxl" weight="bold">
                Question, aprenda
              </Heading>
              <S.TextContainer>
                <Text color="blue_950">
                  Você ou os seus filhos têm um problema com os estudos.
                  Tranquilo. Do inglês à física, o Questty cuida da sua vida
                  acadêmica. Seja qual for a sua dúvida, você vai encontrar a
                  resposta, entender o que está por trás dela e alcançar todo o
                  seu potencial.
                </Text>
              </S.TextContainer>
            </S.HeroHeading>
            <S.InputSearchFormContainer>
              <S.InputSearch placeholder="Digite aqui a sua pergunta" />
              <Button type="submit" backgroundColor="yellow_800">
                PERGUNTE
              </Button>
            </S.InputSearchFormContainer>
          </S.HeroContainer>
        </S.LandingContainer>
      </S.LandingContent>
    </>
  )
}

Landing.getLayout = (pages: ReactElement) => {
  return <DefaultLayout>{pages}</DefaultLayout>
}

export default Landing
