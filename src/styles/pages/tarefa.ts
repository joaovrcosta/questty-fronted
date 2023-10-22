import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 4rem;

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
    padding: 0 1.5rem;
  }
`

export const TextSectionTitle = styled(Text)`
  margin-right: 2rem;
  font-size: 24px;
  font-family: Poppins;
`

export const NeedHelpContainer = styled.div`
  width: 90%;
  background-color: transparent;
  margin-left: auto;
  padding: 1.5rem;
  border-radius: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  @media (max-width: 420px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`

export const AnswerButton = styled(Button)`
  width: 50%;
  margin-top: 1rem;
`

export const HelpMorePeopleContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`
