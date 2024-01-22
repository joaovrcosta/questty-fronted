import styled, { css } from 'styled-components'

const baseProps = css`
  background-color: rgb(179, 179, 179);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgb(255, 255, 255),
    rgba(0, 0, 0, 0)
  );
  display: inline-block;
  line-height: 1;
  opacity: 0.1;
  animation: 1.2s ease-in-out 0s infinite normal none running animate-white;

  @keyframes animate-white {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`

export type roundingVariants = 'rounded' | 'rounded-full' | 'rounded-none'

interface ISkeletonLine {
  width: number
  height: number
  rounding: roundingVariants
}

interface ISkeletonCircle {
  size: number
}

export const SkeletonLine = styled.div<ISkeletonLine>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  width: 100%;

  /* .. */

  border-radius: ${({ rounding }) => {
    switch (rounding) {
      case 'rounded':
        return '0.5rem'
      case 'rounded-full':
        return '9999px'
      case 'rounded-none':
        return '0'
      default:
        return '0.25rem'
    }
  }};

  ${baseProps}
`

export const SkeletonCircle = styled.div<ISkeletonCircle>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  /* .. */
  border-radius: 50%;

  ${baseProps}
`

export const SkeletonBoxRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  line-height: 0;

  ${baseProps}
`

export const SkeletonBox = styled.div`
  display: flex;
  flex-direction: column;

  ${baseProps}
`
