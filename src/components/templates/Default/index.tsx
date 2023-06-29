import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'

interface ILayout {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
