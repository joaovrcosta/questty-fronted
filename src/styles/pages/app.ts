import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: 5.875rem;

  ${({ theme }) => css`
    @media (max-width: 770px) {
      margin-top: 152px;
    }
  `}
`
