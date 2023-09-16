import { create } from 'zustand'

export interface IUser {
  id: string
  name: string
  email: string
  createdAt: string
  answers: Array<any>
  questions: Array<any>
}

interface AuthStore {
  user: IUser | null
  token: string | null
  isLoggedIn: boolean
  login: (user: IUser, token: string) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoggedIn: false,
  login: (user, token) => {
    console.log('Logging in:', user)
    set({ user, token, isLoggedIn: true })
  },
  logout: () => set({ user: null, token: null, isLoggedIn: false }),
}))

export default useAuthStore
