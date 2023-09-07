import styled, { css } from 'styled-components'

export const LandingContent = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  background-color: ${({ theme }) => theme.colors.yellow_400};

  padding: 0.85rem 0rem 3rem 0rem;

  ${({ theme }) => css`
    @media (max-width: 1280px) {
      gap: 0;
      padding: 1.5rem 1rem 3rem 1rem;
    }
  `}

  @media (max-width: 1168px) {
    width: 100%;
  }

  ${({ theme }) => css`
    @media (max-width: 480px) {
      gap: 0;
      width: 100%;
    }
  `}
`
export const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 2.5rem;
  max-width: 836px;

  ${({ theme }) => css`
    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }
  `}
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextContainer = styled.div`
  width: 40rem;
  margin-top: 1rem;
`

export const HeroHeading = styled.div``

export const InputSearchFormContainer = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 56px;
  padding: 1.25rem;
  justify-content: space-between;
`

export const InputSearch = styled.input`
  border: none;
  font-family: 'Poppins';
  font-size: 1.25rem;
`
