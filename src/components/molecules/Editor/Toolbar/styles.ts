import styled from 'styled-components'

export const ToolsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0.25rem;
  width: 206px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const ToolButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  height: 40px;
  width: 40px;
  /* margin-top: 2rem; */

  &:hover {
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.black};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
