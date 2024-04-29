import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { HeaderAuth } from '@/components/organisms/HeaderAuth'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode
}

export function Error404Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export const Container = styled.main`
  margin-top: 6.3rem;

  @media (max-width: 770px) {
    margin-top: 4.3rem;
  }
`
