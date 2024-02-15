import styled from 'styled-components'

export const ToolsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ToolButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  height: 40px;
  width: 40px;

  &:hover {
    transition: 0.2s;
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`
