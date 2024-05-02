import styled from 'styled-components'

export const AnswerEditorContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #d4e8f6;
  margin-bottom: 1rem;
  border-radius: 12px;
  border: 1px solid #000;
`
export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 1rem;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  font-family: Poppins;
  padding: 8px 16px;
  overflow-y: auto;
  height: 168px;
  border-radius: 8px;
  font-size: 0.85rem;
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
