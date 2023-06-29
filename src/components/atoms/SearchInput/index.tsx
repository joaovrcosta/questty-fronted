import React, { useState } from 'react'
import * as S from './styles'
import Link from 'next/link'

export function SearchInput() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  return (
    <S.SearchInputContainer>
      <S.SearchInput
        placeholder="Qual a sua dúvida?"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue ? (
        <Link href="/ask">
          <S.SearchButton>
            <S.SearchIcon size={16} color="#fff" />
          </S.SearchButton>
        </Link>
      ) : (
        <S.SearchIcon size={16} color="#000" style={{ marginRight: '12px' }} />
      )}
    </S.SearchInputContainer>
  )
}
