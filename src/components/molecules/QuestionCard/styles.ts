import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'

export const QuestionCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4);
  padding: 0.875rem 2.5rem 0.875rem 1rem;
  max-height: 120px;
  margin-top: 0.5rem;
`
export const QuestionContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserAvatarContainer = styled.div`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`

export const QuestionContent = styled.div`
  display: flex;
  align-items: center;
`

export const QuestionText = styled(Text)`
  line-height: 1.4;
  font-family: Roboto;
`

export const QuestionInfo = styled.div`
  width: 24rem;
`

export const SubjectAndDateTimeContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`
export const Subject = styled(Text)``
export const DateTime = styled(Text)``

export const AswerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AnswerButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AnswerButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.black};
`

export const AnswerQuantity = styled.div`
  display: flex;
  align-items: center;
`
