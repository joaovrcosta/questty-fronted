// PulsingEffect/styles.ts
import styled, { keyframes } from 'styled-components'

interface PulsingEffectContainerProps {
  rounded: boolean
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.7);
  }
`

export const PulsingEffectContainer = styled.div<PulsingEffectContainerProps>`
  display: inline-block;
  animation: ${pulseAnimation} 1s infinite;
  border-radius: ${({ rounded }) => (rounded ? '9999px' : '0')};
`
