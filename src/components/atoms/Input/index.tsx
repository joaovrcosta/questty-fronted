import { ColorThemeType } from '@/core/constants/theme'
import * as S from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from 'react'
import ReactInputMask from 'react-input-mask'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

type InputAppProps = Props & {
  className?: string
  backgroundColor?: ColorThemeType
  variant: S.sizeVariants
  hug?: boolean
  error?: string
  label?: string
  showLabel?: boolean
  placeholderIcon?: ReactNode | string
  crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined // reactmask is using crossOrigin prop and typescript is not recognizing it
}

type InputMaskProps = InputAppProps & {
  mask?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputAppProps>(
  (
    {
      className,
      placeholderIcon,
      showLabel,
      label,
      backgroundColor = 'white',
      error,
      variant = 'lg',
      hug,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        <S.InputContainer sizeOf={variant} hug={hug}>
          {placeholderIcon && (
            <S.PlaceholderIcon>{placeholderIcon}</S.PlaceholderIcon>
          )}
          <S.InputBox hug={hug} hasError={!!error} className={className}>
            {showLabel && <S.InputLabel>{label}</S.InputLabel>}
            <S.Input
              hasIcon={!!placeholderIcon}
              background={backgroundColor}
              type="text"
              autoComplete="none"
              sizeOf={variant}
              {...rest}
              ref={ref}
            />
            {error && <S.InputError>{error}</S.InputError>}
          </S.InputBox>
        </S.InputContainer>
      </div>
    )
  }
)

const InputMask = forwardRef<ReactInputMask, InputMaskProps>(
  (
    {
      className,
      placeholderIcon,
      backgroundColor = 'white',
      error,
      variant = 'lg',
      hug,
      mask = '',
      ...rest
    },
    ref
  ) => {
    return (
      <S.InputContainer sizeOf={variant} hug={hug}>
        {placeholderIcon && (
          <S.PlaceholderIcon>{placeholderIcon}</S.PlaceholderIcon>
        )}
        <S.InputBox hug={hug} hasError={!!error} className={className}>
          <S.InputWithMask
            hasIcon={!!placeholderIcon}
            background={backgroundColor}
            type="text"
            sizeOf={variant}
            autoComplete="none"
            {...rest}
            mask={mask}
            ref={ref}
          />
          {error && <S.InputError>{error}</S.InputError>}
        </S.InputBox>
      </S.InputContainer>
    )
  }
)

InputMask.displayName = 'InputMask'

export { Input, InputMask }
