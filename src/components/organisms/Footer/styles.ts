import { Text } from '@/components/atoms/Text'
import styled from 'styled-components'
import { Button } from '@/components/atoms/Button'

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_100};
`

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 1.25rem 3rem 1.25rem;
  font-family: Poppins;
  gap: 1rem;
`

export const LogoColumn = styled.div`
  margin-right: 5rem;

  @media (max-width: 768px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
    padding-bottom: 1.25rem;
  }
`

export const FollowUs = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 1rem;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const CircleIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.3s ease all;

  :hover {
    opacity: 0.8;
  }
`

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 769px) {
    flex-basis: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};

    :last-child {
      border: none;
    }
  }
`

export const ColumnTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 20px;
  font-family: Poppins;
`

export const Link = styled.a`
  font-size: ${({ theme }) => theme.typography.text.xs};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  :hover {
    transition: 0.5s ease all;
    opacity: 0.65;
  }
`

export const LinkTalkToUs = styled.a`
  font-size: ${({ theme }) => theme.typography.text.md};
  color: ${({ theme }) => theme.colors.black};
  margin-left: 0.5rem;

  cursor: pointer;

  :hover {
    transition: 0.5s ease all;
    opacity: 0.65;
  }
`

export const FirstColumn = styled.div`
  display: flex;
  background-color: red;
`

export const SecondColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: green;
`

export const AllRightsText = styled(Text)`
  margin: 0 auto;
  text-align: center;
  padding: 1rem 0.625rem 1.875rem 0.625rem;
`

export const TalkToUs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const WhatsappButton = styled(Button)`
  background-color: #1bb468;
  margin-bottom: 1rem;
  margin-top: 1rem;
`
