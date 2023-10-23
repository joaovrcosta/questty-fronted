import type { AppProps } from 'next/app'
import { defaultTheme } from '@/core/constants/theme'
import { ThemeProvider } from 'styled-components'
import * as S from '../styles/pages/app'
import { ReactElement, ReactNode, useEffect } from 'react'
import { NextPage } from 'next'
import { GlobalStyle } from '@/styles/global'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import Cookies from 'js-cookie'

import { getUserFromToken } from '@/lib/get-user-from-token'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const { login } = useAuthStore()

  useEffect(() => {
    const token = Cookies.get('questty-token')

    if (token) {
      getUserFromToken(token)
        .then((user) => {
          if (user) {
            login(user, token)
          }
        })
        .catch((error) => {
          console.error('Erro ao obter usuário:', error)
          if (error.response && error.response.status === 401) {
            window.location.href = '/signin'
          }
        })
    }
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <S.Container>{getLayout(<Component {...pageProps} />)}</S.Container>
    </ThemeProvider>
  )
}
