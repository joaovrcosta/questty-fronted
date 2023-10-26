import { Footer } from '@/components/organisms/Footer'
import { HeaderAuth } from '@/components/organisms/HeaderAuth'

interface ILayout {
  children: React.ReactNode
}

export function SignInLayout({ children }: ILayout) {
  return (
    <>
      <HeaderAuth />
      <main>{children}</main>
      <Footer />
    </>
  )
}
