import { ICurrentUserData } from '@/shared/types'
import { create } from 'zustand'

interface AuthStore {
  user: ICurrentUserData | null
  token: string | null
  isLoggedIn: boolean
  login: (user: ICurrentUserData, token: string) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  login: (user, token) => {
    set({ user, token, isLoggedIn: true })
  },
  logout: () => set({ user: null, token: null, isLoggedIn: false }),
}))

export default useAuthStore
