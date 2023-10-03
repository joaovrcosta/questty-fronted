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
        if (err instanceof TokenExpiredError) {
          console.error('Erro de autenticação JWT:', err.message)
          ctx.res.setHeader(
            'Set-Cookie',
            'questty-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/;'
          )
          return {
            redirect: {
              permanent: false,
              destination: '/signin',
            },
            props: {},
          }
        } else if (err instanceof JsonWebTokenError) {
          console.error('Erro de autenticação JWT:', err.message)
        } else {
          console.error('Erro desconhecido:', err)
        }

        return {
          redirect: {
            permanent: false,
            destination: '/signin',
          },
          props: {},
        }
      }
    }

    return {
      props: {},
    }
  }
}
