import React from 'react'
import * as S from './styles'
import categoriesData from '@/shared/jsons/categoryData.json'

interface SubjectSelectProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function SubjectSelect({ onChange }: SubjectSelectProps) {
  return (
    <S.SubjectSelect onChange={onChange}>
      <option value="">Escolha a matéria</option>
      {categoriesData.categories.map((category: any) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </S.SubjectSelect>
  )
}
