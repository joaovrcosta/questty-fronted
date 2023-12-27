import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow_50};
  /* height: 100vh; */
`

export const LandingContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.yellow_50};

  padding: 0.85rem 0rem 3rem 0rem;

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 0;
      padding: 1.5rem 1rem 3rem 1rem;
    }
  `}

  @media (max-width: 1168px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    padding: 1.5rem 1rem 0 1rem;
  }

  ${({ theme }) => css`
    @media (max-width: 480px) {
      gap: 0;
      width: 100%;
      margin: 0;
      justify-content: flex-start;
    }
  `}
`
export const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 2.5rem;
  max-width: 836px;

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
  }
`

export const TextContainer = styled.div`
  width: 40rem;
  margin-top: 1rem;
  z-index: 99;

  @media (max-width: 769px) {
    width: 100%;
  }
`

export const HeroHeadingContainer = styled.div``

export const HeroHeading = styled(Heading)`
  @media (max-width: 480px) {
    font-size: 40px;
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
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem 1rem 1rem 1rem;

  @media (max-width: 1200px) {
    width: 100%;
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
  padding: 6rem 0 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
