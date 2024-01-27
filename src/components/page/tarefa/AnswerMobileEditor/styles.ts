import styled from 'styled-components'

export const AnswerEditorContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.blue_500};
  margin-bottom: 1rem;
  border-radius: 8px;
`
export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 1rem;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  padding: 8px 16px;
  overflow-y: auto;
  height: 168px;
  border-radius: 8px;
`
export const UserInformationsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const CloseButtonMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
`
