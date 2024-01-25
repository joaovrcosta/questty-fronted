import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode
}

export function DefaultLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export const Container = styled.main`
  margin-top: 6.25rem;

  @media (max-width: 769px) {
    margin-top: 6rem;
  }
`
