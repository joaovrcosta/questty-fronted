import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const QuestionWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
`

export const AnswersContainer = styled.div``

export const AnswersSection = styled.div`
  margin-left: 5.7rem;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0 2rem;
  }
`

export const TextSectionTitle = styled(Text)`
  margin-right: 2rem;
  font-size: 24px;
  font-family: Poppins;
`
