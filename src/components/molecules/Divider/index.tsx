import React from 'react'
import * as S from './styles'

interface LineProps {
  children: React.ReactNode
  id?: string
}

const Divider: React.FC<LineProps> = ({ children, id }) => {
  return (
    <S.LineContainer>
      <S.LineDivider />
      <span>{children}</span>
      <S.LineDivider />
    </S.LineContainer>
  )
}

export default Divider
