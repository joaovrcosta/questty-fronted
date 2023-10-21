import { ReactNode } from 'react'
import * as S from './styles'

interface SkeletonLineProps {
  width: number
  height: number
  rows: number
  rounding?: S.roundingVariants
}

interface SkeletonCircleProps {
  size: number
  rows: number
}

export function SkeletonLine({
  width,
  height,
  rows = 1,
  rounding = 'rounded',
}: SkeletonLineProps) {
  return (
    <S.SkeletonBoxRows>
      {Array(rows)
        .fill(0)
        .map((_, index) => (
          <S.SkeletonLine
            rounding={rounding}
            key={index}
            width={width}
            height={height}
          />
        ))}
    </S.SkeletonBoxRows>
  )
}

export function SkeletonCircle({ size, rows = 1 }: SkeletonCircleProps) {
  return (
    <S.SkeletonBoxRows>
      {Array(rows)
        .fill(0)
        .map((_, index) => (
          <S.SkeletonCircle key={index} size={size} />
        ))}
    </S.SkeletonBoxRows>
  )
}

interface SkeletonBoxProps {
  children: ReactNode
}

export function SkeletonBox({ children }: SkeletonBoxProps) {
  return <S.SkeletonBox>{children}</S.SkeletonBox>
}
