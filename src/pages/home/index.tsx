import { HomePage } from '@/views/home'
import { NextPageWithLayout } from '../_app'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'

// Home Page
const ResetPasswordScreen: NextPageWithLayout = () => {
  return <HomePage />
}

ResetPasswordScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ResetPasswordScreen
