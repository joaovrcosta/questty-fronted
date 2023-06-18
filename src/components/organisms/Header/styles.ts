import styled from 'styled-components'
import Link from 'next/link'

interface IHeader {
  isfixed?: boolean
}

export const HeaderContainer = styled.div<IHeader>`
  background-color: ${({ theme }) => theme.colors.primary};
  /* 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999; */
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 0 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem; //Spacing Items
`

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
`
