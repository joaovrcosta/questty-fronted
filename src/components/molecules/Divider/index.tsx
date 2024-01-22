import React from 'react'
import * as S from './styles'

interface LineProps {
  children: React.ReactNode
}

const Divider: React.FC<LineProps> = ({ children }) => {
  return (
    <S.LineContainer>
      <S.LineDivider />
      <span>{children}</span>
      <S.LineDivider />
    </S.LineContainer>
  )
}

export default Divider
