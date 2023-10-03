import { ColorThemeType } from '@/core/constants/theme'
import styled from 'styled-components'

interface WaveProps {
  backgroundColor: ColorThemeType
}

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
    background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23000000'/></svg>");
  }

  @media (max-width: 850px) {
    &::before {
      height: 68px;
    }
  }
`
export const SecondWave = styled.div<WaveProps>`
  bottom: 0rem;
  height: 0rem;
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  position: relative;
  margin-top: 10rem;

  &::after {
    content: '';
    z-index: 1;
    width: 100%;
    height: 300px; /* Adjust the height to match the SVG */
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: auto;
    background-repeat: no-repeat;
    background-position-y: center; /* Center vertically */
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1921' height='300' viewBox='0 0 1921 300' fill='none'><path d='M1918.23 299.5H0.5V103.689L364.289 222.147C492.747 263.975 631.191 263.781 759.531 221.591L887.968 179.369C1232.39 66.1449 1609.15 110.1 1918.23 299.5Z' fill='white' stroke='black'/><path d='M0 287L1915.5 297.5L1920.5 300H0V287Z' fill='white'/><path d='M0 104L6 106L5.5 289.5L0 293V104Z' fill='white'/></svg>");
  }

  @media (max-width: 850px) {
    &::after {
      display: none;
    }
  }
`

export const WaveContainerr = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`
