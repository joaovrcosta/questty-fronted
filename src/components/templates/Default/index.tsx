import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { useRouter } from 'next/router'

interface ILayout {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: ILayout) {
  const router = useRouter()

  const isLandingPage = router.pathname === '/'

  return (
    <>
      {isLandingPage ? Header}

      <main>{children}</main>
      <Footer />
    </>
  )
}
