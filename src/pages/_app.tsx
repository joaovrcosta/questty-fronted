import type { AppProps } from 'next/app'
import { defaultTheme } from '@/core/constants/theme'
import { DefaultLayout } from '@/components/layouts/default'
import { ThemeProvider } from 'styled-components'
import * as S from '../styles/pages/app'
import { ReactNode, useEffect } from 'react'
import { GlobalStyle } from '@/styles/global'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import Cookies from 'js-cookie'

import { getUserFromToken } from '@/lib/get-user-from-token'

export default function App({ Component, pageProps }: AppProps) {
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

  const defaultLayout = (page: ReactNode) => (
    <DefaultLayout>{page}</DefaultLayout>
  )
  const getLayout = (Component as any).getLayout || defaultLayout

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <S.Container>{getLayout(<Component {...pageProps} />)}</S.Container>
    </ThemeProvider>
  )
}
