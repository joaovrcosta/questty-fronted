import { ColorThemeType } from '@/core/constants/theme'
import { BiSearch } from 'react-icons/bi'
import styled from 'styled-components'

interface ISearchInput {
  backgroundColor?: ColorThemeType
}

export const SearchInputContainer = styled.div<ISearchInput>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.white};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  flex: 1;
  padding: 0.625rem 1.5rem;
  font-family: Poppins;
  background: transparent;
  border-radius: 46px 0 0 46px;

  outline: none;
`
export const SearchIcon = styled(BiSearch)`
  color: white;
`

export const SearchButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
