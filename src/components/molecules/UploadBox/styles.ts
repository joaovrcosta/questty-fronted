import styled from 'styled-components'

export const DropArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 1.25rem;

  border: 1px dashed rgba(0, 75, 255, 1);

  padding: 1.75rem;

  border-radius: 0.4rem;

  svg {
    color: ${({ theme }) => theme.colors.black};
  }
`
