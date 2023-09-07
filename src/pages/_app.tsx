import type { AppProps } from 'next/app'
import { defaultTheme } from '@/core/constants/theme'
import { ThemeProvider } from 'styled-components'
import * as S from '../styles/pages/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { QuestionsProvider } from '@/contexts/QuestionsContext'
import { GlobalStyle } from '@/styles/global'

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
      <GlobalStyle />
      <QuestionsProvider>
        <S.Container>{getLayout(<Component {...pageProps} />)}</S.Container>
      </QuestionsProvider>
    </ThemeProvider>
  )
}
