import React from 'react'
import * as S from './styles'
interface SubjectSelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function PointsSelect({ onChange }: SubjectSelectProps) {
  return (
    <S.SubjectSelect onChange={onChange}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </S.SubjectSelect>
  )
}
