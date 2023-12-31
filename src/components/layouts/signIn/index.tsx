import { Footer } from '@/components/organisms/Footer'
import { HeaderAuth } from '@/components/organisms/HeaderAuth'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode
}

export function SignInLayout({ children }: ILayout) {
  return (
    <>
      <HeaderAuth />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export const Container = styled.main`
  margin-top: 5.875rem;

  @media (max-width: 770px) {
    margin-top: 6.25rem;
  }
`
