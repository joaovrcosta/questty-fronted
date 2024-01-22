import React from 'react'
import * as S from './styles'

interface PulsingEffectProps {
  children: React.ReactNode
  rounded?: boolean
}

const PulsingEffect: React.FC<PulsingEffectProps> = ({
  children,
  rounded = false,
}) => {
  return (
    <S.PulsingEffectContainer rounded={rounded}>
      {children}
    </S.PulsingEffectContainer>
  )
}

export default PulsingEffect
