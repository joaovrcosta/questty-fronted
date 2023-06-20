import type { AppProps } from 'next/app'
import { defaultTheme } from '@/core/constants/theme'
import { ThemeProvider } from 'styled-components'
import '../styles/global.css'
import * as S from '../styles/pages/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={defaultTheme}>
      <S.Container>{getLayout(<Component {...pageProps} />)}</S.Container>
    </ThemeProvider>
  )
}
