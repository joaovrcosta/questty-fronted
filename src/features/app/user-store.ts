import api from '@/services/api'
import { makeObservable, observable, action } from 'mobx'

interface IUser {
  email: string
  password: string
}

interface IUserStore {
  currentUser: IUser | null
  setCurrentUser(user: IUser | null): void
  authenticate(email: string, password: string): Promise<void>
}

class UserStore implements IUserStore {
  currentUser: IUser | null = null
  token: string | null = null

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      authenticate: action,
      setToken: action,
    })
  }

  setCurrentUser(user: IUser | null) {
    this.currentUser = user
  }

  setToken(token: string | null) {
    this.token = token
  }

  async authenticate(email: string, password: string) {
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
