import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 950px) {
    margin-left: 0;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const QuestionWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  margin-top: 8rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0rem;
  }
`

export const AnswersContainer = styled.div`
  & > *:first-child {
    margin-top: 2.5rem;
  }
`

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
