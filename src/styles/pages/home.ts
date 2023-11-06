import { SkeletonBox, SkeletonLine } from '@/components/atoms/Skeleton'
import { Text } from '@/components/atoms/Text'
import { FiFeather } from 'react-icons/fi'
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
  height: 52px;
  border-radius: 8px;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-family: Poppins;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);

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
  height: 52px;
  width: 184px;
  font-size: 14px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.black};
  /* border: none; */
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
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
  /* max-width: 40rem; */

  &:last-child {
    margin-bottom: 20px;
  }
`

export const FeedContentWrapper = styled.div`
  max-width: 56rem;

  @media (max-width: 1168px) {
    width: 100%;
  }
`

export const MakeQuestionButton = styled.button`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  height: 52px;
  width: 192px;
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
  white-space: nowrap;
  font-size: 15px;
  @media (max-width: 1280px) {
    display: none;
  }
`

export const PlusIcon = styled(FiFeather)`
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
`

export const RankingSidebar = styled.div`
  min-width: 320px;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1280px) {
    min-width: 384px;
  }

  @media (max-width: 1168px) {
    display: none;
  }
`

export const RankingBox = styled.div`
  font-family: Poppins;
  background-color: ${({ theme }) => theme.colors.white};
  /* border: 1px solid #000; */
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 3px 3px 10px -2px rgba(0, 0, 0, 0.4);
  max-height: 22rem;
  max-width: 320px;
  min-width: 320px;
`

export const HeadingRankContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2.8rem;
`

export const RankingHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0 1.25rem 0;
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

export const SelectWrapper = styled.div`
  margin-bottom: 1.5rem;
`

export const ProfileInfoSidebar = styled.div`
  /* padding: 0 0 0 2rem; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 320px;
  max-width: 320px;

  @media (max-width: 1280px) {
    min-width: 384px;
  }

  @media (max-width: 1168px) {
    display: none;
  }
`

export const UserAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const QuestionPoints = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray_150};
  border-radius: 25px;
  padding: 0.25rem 0.25rem 0.25rem 0;
  margin-bottom: 1rem;
  width: 100%;
`

export const StarContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
`

export const StarQuantity = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
`

export const MoreConfigurations = styled.div`
  margin-top: 1rem;
`
export const MoreConfigurationsButton = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_150};
  }
`
export const AnswersBySubject = styled.div`
  max-width: 320px;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1280px) {
    min-width: 384px;
  }

  @media (max-width: 1168px) {
    display: none;
  }
`
export const MoreTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 1rem 1rem;
`

export const SubjectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.25rem;
`
export const SideBar = styled.div`
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
export const SkeletonLiner = styled(SkeletonLine)`
  height: 106px;
  width: 400px !important;
`

export const QuestionsWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
`
export const SubjectsOptions = styled.div`
  width: 200px;
`
