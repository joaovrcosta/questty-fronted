import styled, { css } from 'styled-components'

export const SubjectSelect = styled.select`
  height: 44px;
  width: 80px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  color: #777777;
  font-weight: 600;
  font-family: Poppins;
  cursor: pointer;
  border-bottom: 4px solid #e5e5e5;

  border-radius: 12px;
  padding: 0 0 0 16px;

  &:focus {
    border: 2px solid #6d83f3;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.1s ease all;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`
