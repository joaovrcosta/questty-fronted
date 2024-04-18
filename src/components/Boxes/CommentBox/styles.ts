import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 0 0;
  gap: 1.25rem;
`
export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
export const ModerateContainer = styled.div`
  button {
    background-color: transparent;
    border: none;
    padding: 8px;
    border-radius: 12px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_100};
    }
  }
`
