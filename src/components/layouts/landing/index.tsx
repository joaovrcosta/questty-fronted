import { Footer } from '@/components/organisms/Footer'
import { HeaderLandingPage } from '@/components/organisms/HeaderLandingPage'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode
}

export function LandingLayout({ children }: ILayout) {
  return (
    <>
      <HeaderLandingPage />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export const Container = styled.div`
  margin-top: 0rem;
`
