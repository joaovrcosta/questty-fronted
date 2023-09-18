import styled, { css } from 'styled-components'

export const LandingContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.yellow_400};

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

  ${({ theme }) => css`
    @media (max-width: 480px) {
      gap: 0;
      width: 100%;
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
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  `}
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled.div`
  width: 36rem;
  margin-top: 1rem;
  z-index: 99;
`

export const HeroHeading = styled.div``

export const InputSearchFormContainer = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 56px;
  padding: 1.25rem;
  justify-content: space-between;
  z-index: 99;
`

export const InputSearch = styled.input`
  border: none;
  font-family: 'Poppins';
  font-size: 1.25rem;
`
export const WaveContainer = styled.div`
  bottom: 16rem;
  height: 40vh;
  background-color: ${({ theme }) => theme.colors.yellow_400};
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
