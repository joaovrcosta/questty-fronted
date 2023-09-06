import api from '@/services/api'
import { makeObservable, observable, action } from 'mobx'

interface signInData {
  email: string
  password: string
}

interface IUser {
  id: string
  name: string
  email: string
}

interface IUserStore {
  currentUser: IUser | null
  setCurrentUser(user: IUser | null): void
  signIn(data: signInData): Promise<void>
}

class UserStore implements IUserStore {
  currentUser: IUser | null = null
  token: string | null = null

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      signIn: action,
      setToken: action,
    })
  }

  setCurrentUser(user: IUser | null) {
    this.currentUser = user
  }

  setToken(token: string | null) {
    this.token = token
  }

  async signIn({ email, password }: signInData) {
    try {
      const requestData = {
        email,
        password,
      }

      const response = await api.post('/sessions', requestData)

      const token = response.data.token

      console.log('Token:', token)

      this.setToken(token)

      localStorage.setItem('token', token)
    } catch (error) {
      console.error('Erro ao autenticar:', error)
      throw error
    }
  }
}

const userStore = new UserStore()

export default userStore
