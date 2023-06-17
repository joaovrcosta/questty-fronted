import styled from 'styled-components'

interface IHeader {
  isfixed?: boolean
}

export const HeaderContainer = styled.div<IHeader>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_100};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`

export const HeaderContent = styled.div`
  max-width: 1280px;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchInputContainer = styled.div``

export const SearchInput = styled.input`
  padding: 0.75rem 1.25rem;
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`

export const HeaderActionsContainer = styled.div`
  display: flex;
`
