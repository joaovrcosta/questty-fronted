import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { FaCircleCheck } from 'react-icons/fa6'
import styled, { keyframes } from 'styled-components'

const borderAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`

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
export const CallToActionCard = styled.div`
  width: 90%;
  background: linear-gradient(
    76deg,
    #45a6ff -0.68%,
    #a3ddcf 52.05%,
    #8869de 100%
  );
  margin-left: auto;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px 5px rgba(100, 208, 255, 0.15);

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  @media (max-width: 420px) {
    margin: 0 auto;
    margin-bottom: 3rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const HeadingCallToAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  box-shadow: 255 255 255;
`

export const SignUpButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`

export const CheckIcon = styled(FaCircleCheck)`
  color: #000000;
  height: 20px;
  width: 20px;

  svg {
    height: 16px;
    width: 16px;
  }
`
export const AdvantagesContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`
