import React from 'react'
import * as S from './styles'
interface SubjectSelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function PointsSelect({ onChange }: SubjectSelectProps) {
  return (
    <S.SubjectSelect onChange={onChange}>
      <option value="10">10XP</option>
      <option value="20">20XP</option>
      <option value="30">30XP</option>
      <option value="40">40XP</option>
      <option value="50">50XP</option>
    </S.SubjectSelect>
  )
}
