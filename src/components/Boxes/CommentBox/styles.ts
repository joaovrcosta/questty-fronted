import styled from 'styled-components'

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0 0 0;
  gap: 1.25rem;
  height: 100%;
  margin-top: 0.5rem;

  @media (max-width: 390px) {
    gap: 0rem;
  }
`
export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 390px) {
    gap: 0.75rem;
  }
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
export const ReportedButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 12px;
  background-color: transparent;
  transition: 0.2s ease all;
`
