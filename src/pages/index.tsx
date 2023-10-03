import { NextPageWithLayout } from './_app'
import DefaultLayout from '@/components/templates/Default'
import { ReactElement } from 'react'
import { Heading } from '@/components/atoms/Heading'
import * as S from '@/styles/pages/index'
import { Text } from '@/components/atoms/Text'
import { Button } from '@/components/atoms/Button'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { Wave } from '@/components/atoms/Wave'
import { Card } from '@/components/molecules/Card'
import Image from 'next/image'
import eye from '@/assets/eye.svg'
import starCount from '@/assets/start-count.svg'
import stars from '@/assets/stars.svg'
import rocketGirl from '@/assets/girl-rocket.svg'
import girlPuzzle from '@/assets/girl-puzzle.svg'
import boyHeadphone from '@/assets/boy-img-icon.svg'
import girlUniverse from '@/assets/girl-univerve.svg'

const Landing: NextPageWithLayout = () => {
  return (
    <>
      <S.MainContainer>
        <S.LandingContent>
          <S.LandingContainer>
            <S.HeroContainer>
              <S.HeroHeading>
                <Heading color="blue_950" size="xxl" weight="bold">
                  Questtyone, aprenda
                </Heading>
                <S.TextContainer>
                  <Text
                    color="blue_950"
                    weight="medium"
                    style={{ marginLeft: '8px' }}
                  >
                    Você e seus filhos têm um problema com os estudos.
                    Tranquilo. Do inglês à física, o Questty cuida da sua vida
                    acadêmica. Seja qual for a sua dúvida, você vai encontrar a
                    resposta, entender o que está por trás dela e alcançar todo
                    o seu potencial.
                  </Text>
                </S.TextContainer>
              </S.HeroHeading>
              <S.InputSearchFormContainer>
                <S.InputSearch placeholder="Qual a sua dúvida?" />
                <Button
                  type="submit"
                  backgroundColor="yellow_800"
                  style={{ height: '46px' }}
                >
                  PERGUNTE
                </Button>
              </S.InputSearchFormContainer>
            </S.HeroContainer>
          </S.LandingContainer>
          <div>
            <S.RocketGirlContainer>
              <Image
                src={rocketGirl}
                width={588}
                height={582}
                alt=""
                style={{ marginTop: '1rem' }}
              />
            </S.RocketGirlContainer>
          </div>
        </S.LandingContent>
        <Wave backgroundColor="yellow_400" />

        <S.SecondContainer>
          <S.CardsContainer>
            <S.CardWrapper>
              <Card
                image={<Image src={eye} width={80} height={80} alt="" />}
                titleColor="blue_950"
                descriptionColor="blue_950"
                backgroundColor="yellow_600"
                title="Visualize sem limite"
                description="Visualize sem restrições. Pois nossa missão é o seu conhecimento."
              />
              <Card
                image={<Image src={starCount} width={80} height={80} alt="" />}
                backgroundColor="blue_950"
                title="Avalie as melhores respostas"
                description="Tenha controle das respostas mais exatas para suas dúvidas"
                descriptionColor="white"
              />
              <Card
                image={<Image src={stars} width={80} height={80} alt="" />}
                backgroundColor="yellow_600"
                title="Respostas de ouro"
                titleColor="blue_950"
                descriptionColor="blue_950"
                description="Respostas verificadas por nosso time de mestres"
              />
            </S.CardWrapper>
          </S.CardsContainer>
          <S.HowWorksContainer>
            <S.HeadingContainer>
              <Heading size="lg" weight="bold" color="blue_950">
                Como funciona nossa plataforma?
              </Heading>
            </S.HeadingContainer>
            <S.StepContainer>
              <S.FirstStepWrapper>
                <S.Info>
                  <div>
                    <Text size="xx1" weight="extrabold" color="gray_220">
                      Primero passo
                    </Text>
                  </div>
                  <div>
                    <Heading size="lgg" weight="bold" color="blue_950">
                      Pergunte e Pesquise
                    </Heading>
                    <Text
                      size="lg"
                      style={{ maxWidth: '336px', marginTop: '1rem' }}
                    >
                      As vezes ficamos com dúvidas sobre um assunto, então essa
                      é a hora de pesquisar.
                    </Text>
                  </div>
                  <div style={{ marginTop: '6rem' }}>
                    <Button
                      backgroundColor="yellow_800"
                      rounding="rounded-none"
                    >
                      PERGUNTE
                    </Button>
                  </div>
                </S.Info>
                <S.StepImage>
                  <Image
                    src={girlPuzzle}
                    width={451}
                    height={430}
                    alt=""
                    style={{ marginTop: '1rem' }}
                  />
                </S.StepImage>
              </S.FirstStepWrapper>
              <S.FirstStepWrapper>
                <S.Info>
                  <div>
                    <Text size="xx1" weight="extrabold" color="gray_220">
                      Segundo passo
                    </Text>
                  </div>
                  <div>
                    <Heading
                      size="lgg"
                      weight="bold"
                      color="blue_950"
                      style={{ maxWidth: '430px' }}
                    >
                      Receba explicações passo a passo
                    </Heading>
                    <Text
                      size="lg"
                      style={{ maxWidth: '336px', marginTop: '1rem' }}
                    >
                      Faça uma pergunta e receba até três respostas de nossos
                      especialistas e estudantes brilhantes.
                    </Text>
                  </div>
                  <div style={{ marginTop: '6rem' }}>
                    <Button backgroundColor="green_300" rounding="rounded-none">
                      PESQUISE
                    </Button>
                  </div>
                </S.Info>
                <S.StepImage>
                  <Image
                    src={boyHeadphone}
                    width={535}
                    height={471}
                    alt=""
                    style={{ marginTop: '1rem' }}
                  />
                </S.StepImage>
              </S.FirstStepWrapper>
              <S.FirstStepWrapper>
                <S.Info>
                  <div>
                    <Text size="xx1" weight="extrabold" color="gray_220">
                      Terceiro passo
                    </Text>
                  </div>
                  <div>
                    <Heading size="lgg" weight="bold" color="blue_950">
                      Evolua com a gente
                    </Heading>
                    <Text
                      size="lg"
                      style={{ maxWidth: '336px', marginTop: '1rem' }}
                    >
                      Queremos você no próximo nivel, por isso estamos disposto
                      a evoluir sempre nossa plataforma!
                    </Text>
                  </div>
                  <div style={{ marginTop: '6rem' }}>
                    <Button rounding="rounded-none" backgroundColor="blue_250">
                      COMEÇAR
                    </Button>
                  </div>
                </S.Info>
                <S.StepImage>
                  <Image
                    src={girlUniverse}
                    width={552}
                    height={466}
                    alt=""
                    style={{ marginTop: '1rem' }}
                  />
                </S.StepImage>
              </S.FirstStepWrapper>
            </S.StepContainer>
          </S.HowWorksContainer>
        </S.SecondContainer>
        <S.ThrdContainer>
          <S.ProposeContainer></S.ProposeContainer>
        </S.ThrdContainer>
      </S.MainContainer>
    </>
  )
}

Landing.getLayout = (pages: ReactElement) => {
  return <DefaultLayout>{pages}</DefaultLayout>
}

export default Landing

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const tokenJwt = ctx.req.cookies['questty-token']

  if (tokenJwt) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
    }
  }

  return {
    props: {},
  }
}
