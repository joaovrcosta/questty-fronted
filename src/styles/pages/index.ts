import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { Wave } from '@/components/atoms/Wave'
import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  background: linear-gradient(180deg, #014981 0%, #ebf2f7 20%);
  height: 100%;

  @media (max-width: 480px) {
    background: white;
  }
`

export const LandingContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  background: transparent;

  padding: 6.5rem 0rem 3rem 0rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 0;
      padding: 6.5rem 0rem 3rem 0rem;
    }
  `}

  @media (max-width: 1168px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    padding: 6.5rem 2.5rem 4.5rem 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
    margin: 0;
    justify-content: flex-start;
    border-radius: 0 0 40px 40px;
    background: linear-gradient(180deg, #014981 0%, #ebf2f7 65%);
    /* padding: 10px; */
  }
`
export const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 2.5rem;
  max-width: 836px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: 769px) {
      width: 100%;
      flex-direction: column;
      margin-top: 1rem;
      margin-bottom: 0;
    }
  `}
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`

export const TextContainer = styled.div`
  width: 40rem;
  margin-top: 1rem;
  z-index: 99;

  @media (max-width: 769px) {
    width: 100%;
    display: none;
  }
`

export const HeroHeadingContainer = styled.div``

export const HeroHeading = styled.h1`
  font-family: Poppins;
  color: ${({ theme }) => theme.colors.blue_950};
  font-weight: 800;
  font-size: 52px;

  @media (max-width: 1200px) {
    text-align: center;
    width: 100%;
  }

  @media (max-width: 769px) {
    margin-top: 10px;
    font-size: 28px;
    text-align: center;
  }
`

export const InputSearchFormContainer = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 56px;
  align-items: center;
  padding: 0 0.75rem 0 1.5rem;
  justify-content: space-between;
  z-index: 99;
  width: 40rem;
  height: 5rem;

  @media (max-width: 769px) {
    width: 100%;
    margin-top: 2rem;
    height: 56px;
  }
`

export const InputSearch = styled.input`
  border: none;
  font-family: 'Proxima Nova';
  font-size: 18px;
  width: 100%;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_400};
  }

  &:focus {
    outline: none;
  }
`
export const WaveContainer = styled.div`
  bottom: 16rem;
  height: 40vh;
  background-color: transparent;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 138px;
    position: absolute;
    bottom: -0.3%;
    left: 0;
    background-size: auto;
    background-repeat: repeat no-repeat;
    background-position: 42vw bottom;
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23FFC700'/></svg>");
  }

  @media (max-width: 850px) {
    &::before {
      height: 68px;
    }
  }
`
export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 1rem 1rem 1rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 4rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`

export const SecondContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`

export const RocketGirlContainer = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`

export const HowWorksContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`

export const HeadingContainer = styled.div`
  width: 100%;
  padding: 4rem 1rem 4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: #ebf2f7;
  flex-direction: column;
  margin: 2rem 0 2rem 0;
`

export const StepContainer = styled.div``

export const FirstStepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4rem;
  padding-left: 12rem;
  padding-right: 12rem;

  @media (max-width: 1200px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 870px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const StepImage = styled.div`
  @media (max-width: 870px) {
    display: none;
  }
`
export const ThrdContainer = styled.div``

export const ProposeContainer = styled.div``

export const AskButton = styled(Button)`
  @media (max-width: 769px) {
    display: none;
  }
`
export const AskButtonMobile = styled(Button)`
  align-items: center;
  justify-content: center;

  display: none;
  @media (max-width: 769px) {
    display: block;
  }
`

export const Waving = styled(Wave)`
  @media (max-width: 850px) {
    display: none;
  }
`

export const SubTitle = styled(Text)`
  margin-left: 8px;

  @media (max-width: 769px) {
    margin-left: 0px;
  }
`

export const HeadingHero = styled.section`
  display: none;

  h4 {
    font-family: untitled serif;
    font-weight: 300;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    margin-left: 24px;
    display: block;
  }
`
export const CallToActionButton = styled.div`
  display: none;

  @media (max-width: 769px) {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    flex-direction: column;
    gap: 12px;
  }
`
export const RocketGirlMobile = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const StudentsComments = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 1280px) {
    display: block;
    width: 100%;
    gap: 1rem;
  }
`
export const BoxComment = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 2rem;
  width: 22rem;
  font-family: untitled;

  @media (max-width: 1280px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const HeadingText = styled(Heading)`
  margin-bottom: 1.5rem;
  @media (max-width: 1280px) {
    text-align: center;
  }
`
