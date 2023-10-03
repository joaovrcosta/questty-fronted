import { ColorThemeType } from '@/core/constants/theme'
import styled from 'styled-components'

interface ICard {
  backgroundColor: ColorThemeType
}

export const CardContainer = styled.div<ICard>`
  height: 26rem;
  width: 24rem;
  display: flex;
  padding: 4rem 1rem;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
`

export const ContentContainer = styled.div``

export const ImageContainer = styled.div``

export const Item = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  padding: 1rem;
`

export const BackCard = styled.div`
  height: 20rem;
  width: 18rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  right: 25%;
`
