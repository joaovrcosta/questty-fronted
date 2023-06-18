import type { AppProps } from 'next/app'
import { defaultTheme } from '@/core/constants/theme'
import { ThemeProvider } from 'styled-components'
import '../styles/global.css'
import * as S from '../styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.Container>
        <Component {...pageProps} />
      </S.Container>
    </ThemeProvider>
  )
}
