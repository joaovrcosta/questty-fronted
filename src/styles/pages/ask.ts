import styled from 'styled-components'

export const AskContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`
export const AskContent = styled.div`
  padding: 2rem 0.75rem;
`

export const SearchHeader = styled.div`
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  font-family: Poppins;
  display: flex;
`

export const QuestionsContainer = styled.div`
  padding: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray_100};
  border-radius: 5px;
`

export const SearchQuantity = styled.div`
  margin-left: 8px;
  background-color: #d9f0ff;
  padding: 0 0.5rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AllResultsContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  cursor: pointer;
  border-bottom: 3px solid #0089e3;
`

export const Seen = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  cursor: pointer;
`
