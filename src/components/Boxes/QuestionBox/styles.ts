import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { intercept } from 'mobx'
import Image from 'next/image'
import styled, { css } from 'styled-components'

interface IQuestionBoxProps {
  isLoggedIn: boolean
}

interface IAnswerButton {
  isAnswering?: boolean
}

export const QuestionBoxContainer = styled.div<IQuestionBoxProps>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1.5rem 2rem 1.5rem 2rem;
  border-radius: 16px;
  width: 90%;
  box-shadow: 0px 4px 5px 10px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 80px;
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
    top: 80px;
    left: -32px;
    transform: translateY(-50%) rotate(-180deg);
    border-width: 32px 0 32px 32px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }

  @media (max-width: 768px) {
    width: 100%;
    background-color: transparent;
    padding: ${({ isLoggedIn }) =>
      isLoggedIn ? '0rem 1.5rem 0rem 1.5rem' : '3rem 2rem 1.5rem 2rem'};
    border: none;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 1);

    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }
`
export const LogoIcon = styled(Image)`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 72px;
    }
  `}
`

export const QuestionInfo = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const QuestionInfoWrapper = styled.div`
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
  font-family: Poppins;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnswerQuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const AnswerQuantity = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`

// Question Content

export const QuestionContent = styled.div`
  margin-bottom: 1.5rem;
`

export const QuestionTitleText = styled(Text)`
  line-height: 1.2;
  font-family: Inter;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      line-height: 1.4;
    }
  `}
`

export const QuestionTitle = styled.div`
  margin-bottom: 1rem;
`

export const QuestionContentText = styled(Text)`
  font-family: Nunito;

  ${({ theme }) => css`
    @media (max-width: 735px) {
      font-size: 16px;
    }
  `};
`

// User Handle Actions
export const UserHandleActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e5e5e5;
  padding: 0 0 1rem 0;
  /* margin-top: 3rem; */

  @media (max-width: 768px) {
    /* flex-wrap: wrap; */
  }
`

export const AnswerButton = styled(Button)<IAnswerButton>`
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid #000;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.black};
    transition: 0.2s ease all;
  }

  @media (max-width: 769px) {
    width: 100%;
  }

  ${({ isAnswering }) =>
    isAnswering &&
    `
    display: none;
  `}
`

export const SeeAnswerButton = styled(Button)`
  font-weight: 600;
  height: 48px;
  border: 2px solid ${({ theme }) => theme.colors.black};

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue_950};
    transition: 0.2s ease all;
  }

  @media (max-width: 769px) {
    width: 100%;
  }
`

export const ModerationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20%;

  @media (max-width: 769px) {
    /* margin-top: 1rem; */
  }
`

export const ModerateButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  justify-content: flex-end;
  border: none;
  background-color: transparent;

  ${({ theme }) => css`
    @media (max-width: 769px) {
      font-size: 16px;
    }
  `}

  @media (max-width: 280px) {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_100};
    transition: 0.3s ease all;
  }
`

// More Details

export const MoreDetailsInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const MoreDetailsInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
`

export const NoLoggedMoreDetailsInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0rem 1.5rem;

  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
  cursor: pointer;
  height: 38px;

  @media (max-width: 769px) {
    background-color: #fff;
  }
`

export const NoLoggedMoreDetailsInput = styled.input`
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 33px;
  border: none;
  font-family: Poppins;
  outline: 0;
  cursor: pointer;
  font-size: 15px;

  @media (max-width: 769px) {
    background-color: #fff;
  }
`

export const QuestionWrapper = styled.div`
  max-width: 912px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
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

  ${({ theme }) => css`
    @media (max-width: 769px) {
      display: none;
    }
  `}
`

export const AvatarContainer = styled.div`
  margin-top: 55px;
  margin-right: 2.4rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `};
`

export const AvatarInfoContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: block;
    }
  `};
`

export const ModerateLabelText = styled(Text)`
  ${({ theme }) => css`
    @media (max-width: 768px) {
      font-size: ${({ theme }) => theme.typography.text.md};
    }
  `};
  @media (max-width: 436px) {
    display: none;
  }
`

export const DateTimeText = styled(Text)`
  @media (max-width: 280px) {
    display: none;
  }
`
export const UserInfo = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 280px) {
    display: none;
  }
`

export const InfoWrapperr = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 440px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`

export const BackButtonBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.5rem;
  transition: 0.2s ease all;

  &:hover {
    background: ${({ theme }) => theme.colors.gray_100};
  }

  @media (max-width: 769px) {
    display: none;
  }
`

export const ContentContainer = styled.div``

export const CommentSection = styled.div``

export const CommentForm = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;

  @media (max-width: 769px) {
    gap: 0.5rem;
  }
`
export const SendButton = styled.button`
  border-radius: 50%;
  height: 38px;
  width: 38px;
  min-width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;

  & svg {
    color: ${({ theme }) => theme.colors.blue_550};
  }
`

export const LoginLink = styled(Text)`
  text-decoration: none;
  font-size: 15px;
  color: #014a82;

  &:hover {
    text-decoration: underline;
  }
`

export const MobileAnswerButton = styled.button``

export const HasAnsweredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const SubInfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const SubjectText = styled(Text)`
  font-family: Inter;
`

export const AnwseredStamp = styled.div`
  background-color: ${({ theme }) => theme.colors.blue_550};
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
`
