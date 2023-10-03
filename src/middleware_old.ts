import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  verify,
  Secret,
  JsonWebTokenError,
  TokenExpiredError,
} from 'jsonwebtoken'
import { parseCookies } from 'nookies'

const secret = process.env.JWT_SECRET

function redirectToSignIn(req: NextRequest) {
  return NextResponse.redirect(new URL('/signin', req.url))
}

export function middleware(req: NextRequest) {
  console.log('passou aqui')

  const cookies = parseCookies()
  const tokenJwt = cookies['questty-token']

  console.log(tokenJwt, 'token')

  const url = req.url

  if (url.includes('/home')) {
    if (!tokenJwt) {
      return redirectToSignIn(req)
    }

    try {
      if (secret) {
        verify(tokenJwt, secret as Secret)
        return NextResponse.next()
      } else {
        console.error('O segredo JWT não está definido.')
        return redirectToSignIn(req)
      }
    } catch (err) {
      if (
        err instanceof JsonWebTokenError ||
        err instanceof TokenExpiredError
      ) {
        console.error('Erro de autenticação JWT:', err.message)
        return redirectToSignIn(req)
      } else {
        console.error('Erro desconhecido:', err)
        return redirectToSignIn(req)
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/home', '/home/:path*'],
}
