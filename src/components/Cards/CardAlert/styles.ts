import styled from 'styled-components'

export const CardAlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 16px;
  padding: 0.92rem 1.5rem;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: black;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    transition: 0.2s ease all;
    opacity: 0.7;
  }
`
export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
  }
`
