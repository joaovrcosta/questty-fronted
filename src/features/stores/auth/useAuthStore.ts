import { ICurrentUserData } from '@/shared/types'
import Cookies from 'js-cookie'
import { create } from 'zustand'
import { NextRouter } from 'next/router'

interface AuthStore {
  user: ICurrentUserData | null
  token: string | null
  isLoggedIn: boolean
  login: (user: ICurrentUserData, token: string) => void
  logout: (router: NextRouter) => void
}

const useAuthStore = create<AuthStore>((set) => {
  return {
    user: null,
    token: null,
    isLoggedIn: false,
    login: (user, token) => {
      set({ user, token, isLoggedIn: true })
    },
    logout: (router: NextRouter) => {
      Cookies.remove('questty-token')
      set({ user: null, token: null, isLoggedIn: false })

      router.push('/')
    },
  }
})

export default useAuthStore
