import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'

interface SpinnerProps {
  size: S.sizeVariants
  baseColor: ColorThemeType
  variant: S.variants
}

export function Spinner({ baseColor, size, variant }: SpinnerProps) {
  if (variant == 'primary') {
    return <S.PrimarySpinner size={size} baseColor={baseColor} />
  }
  return <S.SecondarySpinner size={size} baseColor={baseColor} />
}
