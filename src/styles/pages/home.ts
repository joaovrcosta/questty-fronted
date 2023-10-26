import { SkeletonBox } from '@/components/atoms/Skeleton'
import { Text } from '@/components/atoms/Text'
import { BiPencil } from 'react-icons/bi'
import styled, { css } from 'styled-components'

export const HomePageContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding: 2.5rem 1rem 3rem 1rem;

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 0;
      padding: 1rem 1rem 3rem 1rem;
    }
  `}

  @media (max-width: 1168px) {
    width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: 480px) {
      gap: 0;
      width: 100%;
      padding: 0.5rem 1rem 1.5rem 1rem;
    }
  `}
`

export const SubjectsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  max-width: 836px;

  @media (max-width: 1168px) {
    max-width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  `}
`

export const Selected = styled.select`
  padding: 0.5rem 1rem 0.5rem 1rem;
  width: 184px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  height: 46px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`

export const SelectedAlreadyAnswering = styled.select`
  padding: 0.5rem 1rem 0.5rem 1rem;
  height: 46px;
  width: 184px;
  font-size: 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`

export const MakeQuestionButtonContainer = styled.div``

export const SubjectContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  `}
`

export const QuestionsContainer = styled.div`
  &:last-child {
    margin-bottom: 20px;
  }
`

export const FeedContentWrapper = styled.div`
  max-width: 836px;
  width: 100%;

  @media (max-width: 1168px) {
    max-width: 100%;
    width: 100%;
  }
`

export const MakeQuestionButton = styled.button`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue_950};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  height: 52px;
  width: 184px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.blue_950};
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
    transition: 0.2s ease all;
  }

  @media (max-width: 1280px) {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    padding: 0;
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const TextAsk = styled(Text)`
  @media (max-width: 1280px) {
    display: none;
  }
`

export const PlusIcon = styled(BiPencil)`
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
`

export const RankingSidebar = styled.div`
  padding: 0 0 0 2rem;
  min-width: 416px;

  @media (max-width: 1168px) {
    display: none;
  }
`

export const RankingBox = styled.div`
  font-family: Poppins;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4);
  max-height: 363px;
`

export const HeadingRankContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2.8rem;
`

export const RankingHeading = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const SelectedContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`
export const UserRankingWrapper = styled.div`
  max-height: 224px;
`
export const SelectedRanking = styled.select`
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 14px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;

  &:focus {
    border: 2px solid #6d83f3;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue_300};
  }

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
      border: 2px solid ${({ theme }) => theme.colors.blue_950};
    }
  `}
`

export const QuestionCardSkeleton = styled(SkeletonBox)`
  width: 100px;
  height: 100px;
  flex-direction: column;
`

export const FloarButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 13px;
  padding: 10px 0px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const AddQuestionFloatingButton = styled.button`
  background-color: transparent;
  border: none;
`

export const FloatingButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const FloatingButton = styled.button``

export const FloatingBoxName = styled.div`
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.blue_950};
  border-radius: 6px;
`

export const CirclePlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue_950};
  width: 56px;
  height: 56px;
`
export const Welcome = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`
export const RankingTitle = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`
