import { Button } from '@/components/atoms/Button'
import styled from 'styled-components'

export const HomePageContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const SubjectsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`

export const SubjectButtonModal = styled(Button)``

export const MakeQuestionButtonContainer = styled.div``

export const SubjectContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const QuestionsContainer = styled.div`
  &:last-child {
    margin-bottom: 20px;
  }
`

export const FeedContentWrapper = styled.div`
  max-width: 920px;
`

export const MakeQuestionButton = styled(Button)`
  padding: 1.5rem;
`
