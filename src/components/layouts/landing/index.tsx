import { Footer } from '@/components/organisms/Footer'
import { HeaderLandingPage } from '@/components/organisms/HeaderLandingPage'

interface ILayout {
  children: React.ReactNode
}

export function LandingLayout({ children }: ILayout) {
  return (
    <>
      <HeaderLandingPage />
      <main>{children}</main>
      <Footer />
    </>
  )
}
