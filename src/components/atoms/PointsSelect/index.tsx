import React from 'react'
import * as S from './styles'
interface SubjectSelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function PointsSelect({ onChange }: SubjectSelectProps) {
  return (
    <S.SubjectSelect onChange={onChange}>
      <option value="5">5pts</option>
      <option value="10">10pts</option>
      <option value="20">20pts</option>
      <option value="30">30pts</option>
      <option value="40">40pts</option>
      <option value="50">50pts</option>
    </S.SubjectSelect>
  )
}
