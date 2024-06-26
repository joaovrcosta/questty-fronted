import styled from 'styled-components'

export const FloarButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 13px;
  padding: 10px 0px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const AddQuestionFloatingButton = styled.button`
  background-color: transparent;
  border: none;
`

export const FloatingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const FloatingButton = styled.button``

export const FloatingBoxName = styled.div`
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  border: 2px solid #ebf2f7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export const CirclePlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  width: 56px;
  height: 56px;
  border: 2px solid #ebf2f7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`
