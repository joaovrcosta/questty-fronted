import {
  JsonWebTokenError,
  Secret,
  TokenExpiredError,
  verify,
} from 'jsonwebtoken'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const secret = process.env.JWT_SECRET

export function withSession(handler: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const tokenJwt = ctx.req.cookies['questty-token']

    const url = ctx.req.url ?? ''

    if (url.includes('/home')) {
      if (!tokenJwt) {
        return {
          redirect: {
            permanent: false,
            destination: '/signin',
          },
          props: {},
        }
      }

      try {
        if (secret) {
          verify(tokenJwt, secret as Secret)
        } else {
          console.error('O segredo JWT não está definido.')
          return {
            redirect: {
              permanent: false,
              destination: '/signin',
            },
            props: {},
          }
        }
      } catch (err) {
        if (
          err instanceof JsonWebTokenError ||
          err instanceof TokenExpiredError
        ) {
          console.error('Erro de autenticação JWT:', err.message)
          return {
            redirect: {
              permanent: false,
              destination: '/signin',
            },
            props: {},
          }
        } else {
          console.error('Erro desconhecido:', err)
          return {
            redirect: {
              permanent: false,
              destination: '/signin',
            },
            props: {},
          }
        }
      }
    }

    return {
      props: {},
    }
  }
}
