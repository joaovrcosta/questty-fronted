import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { ICategories } from '@/shared/types'
import api from '@/services/api'
interface SubjectSelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function GradeSelect({ onChange }: SubjectSelectProps) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories')
        setCategories(response.data)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    }

    fetchCategories()
  }, [])

  return (
    <S.SubjectSelect onChange={onChange}>
      <option value="">Escolha a m</option>
      {categories ? (
        categories.map((category: ICategories) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))
      ) : (
        <option value="" disabled>
          Carregando classes...
        </option>
      )}
    </S.SubjectSelect>
  )
}
