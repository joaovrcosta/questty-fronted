import styled from 'styled-components'

export const Container = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const NotFoundAnwersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow_200};
  height: 20rem;
  border-radius: 10px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
