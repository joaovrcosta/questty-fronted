import { Button } from '@/components/atoms/Button'
import styled from 'styled-components'

export const SubjectListContainer = styled.div`
  margin-right: 1rem;
  width: 15.5rem;
  border-radius: 16px;
  padding: 0 1rem 2.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 100%;

  @media (max-width: 769px) {
    display: none;
  }
`

export const ListHeading = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1rem 1rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;
`

export const SubjectListWrapper = styled.div`
  ul {
    padding: 0;
  }

  ul li {
    list-style-type: none;
  }
`

export const Subject = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
  height: 32px;
  display: flex;
  gap: 0.5rem;
`
export const SubjectButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-family: Poppins;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 1rem 0 1rem 0.25rem;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    border-bottom: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 12px;
  }
`
