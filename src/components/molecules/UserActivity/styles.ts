import styled from 'styled-components'

export const UserActivityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: auto; /* Adicionando rolagem horizontal */
  white-space: nowrap; /* Impede que os itens quebrem para a próxima linha */
  /* padding: 2rem 0 0rem 0; */

  @media (max-width: 1100px) {
    padding: 1.5rem 0 0.5rem 0;
  }

  @media (max-width: 769px) {
    padding: 0rem 0 0.5rem 0;
  }
`

export const Item = styled.button`
  background-color: transparent;
  text-decoration: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
