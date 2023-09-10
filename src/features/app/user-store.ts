import api from '@/services/api'
import { makeObservable, observable, action } from 'mobx'
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
interface User {
  name: string
  email: string
  avatar_url?: string
  question: IQuestion
  answer: IAnswer
}

interface signInData {
  email: string
  password: string
}

interface IQuestion {
  content: string
}

interface IAnswer {
  content: string
}

interface IUserStore {
  currentUser: User | null
  setCurrentUser(user: User | null): void
  signIn(data: signInData): Promise<void>
}

class UserStore implements IUserStore {
  currentUser: User | null = null

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
      signIn: action,
    })
  }

  setCurrentUser(user: User | null) {
    this.currentUser = user
  }

  isAuthenticated() {
    return !!this.currentUser
  }

  recoveryUserInformation() {
    const cookies = parseCookies()
    const token = cookies['questty-token']

    if (token) {
      const user = JSON.parse(token)
      this.setCurrentUser(user)
    }
  }

  async signIn({ email, password }: signInData) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token } = response.data

      setCookie(undefined, 'questty-token', token, {
        maxAge: 60 * 60 * 24 * 1, // 24 horas
      })

      const userResponse = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const user = userResponse.data

      console.log(user)

      this.setCurrentUser(user)

      Router.push('/home')
    } catch (error) {
      console.error('Erro ao autenticar:', error)
      throw error
    }
  }
}

const userStore = new UserStore()

export default userStore
