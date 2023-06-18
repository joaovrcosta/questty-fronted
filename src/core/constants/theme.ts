export const defaultTheme = {
  colors: {
    primary: '#FDFFF4',
    blue_100: '#E8FFF2',
    blue_200: '#ADE2FF',
    blue_300: '#B1CCFF',
    blue_500: '#45A6FF',
    blue_600: '#0C9AB9',
    blue_950: '#10162F',
    yellow_100: '#FFFBD9',
    yellow_200: '#FFED8D',
    yellow_500: '#FFD644',
    yellow_700: '#EBA900',
    orange_500: 'rgba(255, 93, 0, 1)',
    green_200: '#AAE10E',
    success_500: '#32CA25',
    green_500: 'rgba(11, 172, 128, 1)',
    danger_500: '#D20032',
    white: 'rgba(255, 255, 255, 255)',
    black: 'rgba(0, 0, 0, 1)',
    gray_100: 'rgba(237, 237, 237, 1)',
    gray_200: 'rgba(204, 204, 204, 1)',
    gray_300: 'rgba(179, 179, 179, 1)',
    gray_400: 'rgba(153, 153, 153, 1)',
    gray_500: 'rgba(128, 128, 128, 1)',
    gray_600: 'rgba(112, 112, 112, 1)',
    gray_700: 'rgba(77, 77, 77, 1)',
    gray_800: 'rgba(51, 51, 51, 1)',
    gray_900: 'rgba(18, 18, 18, 1)',
    transparent: 'rgba(255, 255, 255, 0)',
  } as const,
  typography: {
    heading: {
      xxl: '4rem',
      xl: '3rem',
      lg: '2rem',
      md: '1.75rem',
      sm: '1.25rem',
    } as const,
    text: {
      xxl: '1.75rem',
      xl: '1.25rem',
      lg: '1.125rem',
      md: '1rem',
      sm: '0.875rem',
      xs: '0.75rem',
    } as const,
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    } as const,
  } as const,
}

export type ColorThemeType = keyof typeof defaultTheme.colors
export type TitleFontSize = keyof typeof defaultTheme.typography.heading
export type TextFontSize = keyof typeof defaultTheme.typography.text
export type WeightFont = keyof typeof defaultTheme.typography.weight
