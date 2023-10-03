import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'

interface ToolTipProps {
  backgroundColor?: ColorThemeType
  children: React.ReactNode
  content: string | React.ReactNode | undefined
}

export function Tooltip({ children, content }: ToolTipProps) {
  if (!content) {
    return <>{children}</>
  }

  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <S.ToolTipContent>
            {content}
            <S.TooltipArrow />
          </S.ToolTipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
