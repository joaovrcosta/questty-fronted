import { NextPageWithLayout } from './_app'
import DefaultLayout from '@/components/templates/Default'
import { ReactElement } from 'react'
import { Heading } from '@/components/atoms/Heading'

const Landing: NextPageWithLayout = () => {
  return (
    <>
      <Heading size="lg" color="blue_950">
        Questty Landing Page
      </Heading>
    </>
  )
}

Landing.getLayout = (pages: ReactElement) => {
  return <DefaultLayout>{pages}</DefaultLayout>
}

export default Landing
