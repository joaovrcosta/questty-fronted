import styled from 'styled-components'

export const UserActivityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1100px) {
    padding: 2rem 0 0rem 0;
  }
`
export const Item = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`
