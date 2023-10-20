import Image from 'next/image'
import styled, { css } from 'styled-components'

export type sizeVariants = 'sm' | 'lg' | 'xl'

interface IAvatar {
  variant: sizeVariants
}

const sizeVariants = (size: sizeVariants) => {
  switch (size) {
    case 'sm':
      return css`
        width: 2rem;
        height: 2rem;
      `
    case 'lg':
      return css`
        width: 3.5rem;
        height: 3.5rem;
      `
    case 'xl':
      return css`
        width: 8rem;
        height: 8rem;
      `
  }
}

export const UserAvatarContainer = styled.div<IAvatar>`
  ${({ variant }) => sizeVariants(variant)}

  border-radius: 50%;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue_950};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.blue_950};
    transition: 0.2s ease all;
  }
`

export const AvatarImage = styled(Image)<IAvatar>`
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) => sizeVariants(variant)}
`
