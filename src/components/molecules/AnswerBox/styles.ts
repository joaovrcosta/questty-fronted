import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'

export const AnswerWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`

export const AnswerBoxContainer = styled.div`
  position: relative;
  max-height: 640px;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  box-shadow: 0px 4px 5px 10px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 25%;
    left: -31px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent
      ${({ theme }) => theme.colors.white};
    z-index: 9999;
  }

  &::after {
    content: '';
    position: absolute;
    top: 25%;
    left: -32px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }
`

export const UserAvatarContainer = styled.div`
  margin-top: 5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.black};
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.4rem;
`

export const AnswerInfo = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const AnswerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Username = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const UserLevel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  height: 32px;
  width: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnswerContent = styled.div``

export const QuestionTitleText = styled(Text)`
  font-family: Nunito;
  line-height: 1.2;
`
