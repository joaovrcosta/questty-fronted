import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'

interface WaveProps {
  backgroundColor: ColorThemeType
}

export function Wave({ backgroundColor }: WaveProps) {
  return (
    <S.WaveContainerr>
      <S.SecondWave backgroundColor={backgroundColor}></S.SecondWave>
    </S.WaveContainerr>
  )
}
