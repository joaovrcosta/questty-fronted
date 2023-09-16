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
}

class UserStore implements IUserStore {
  currentUser: User | null = null

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
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
}

const userStore = new UserStore()

export default userStore
