import styled from 'styled-components'

export const Custom404Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 920px) {
    margin-left: 0;
    padding: 0 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 769px) {
    padding: 3rem 2rem;
  }
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
`
