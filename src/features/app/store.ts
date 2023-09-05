import { makeObservable, observable, action } from 'mobx'

interface IUser {
  name: string
  email: string
}

interface IUserStore {
  currentUser: IUser | null
  setCurrentUser(user: IUser | null): void
}

class UserStore implements IUserStore {
  currentUser: IUser | null = null

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      setCurrentUser: action,
    })
  }

  setCurrentUser(user: IUser | null) {
    this.currentUser = user
  }
}

const userStore = new UserStore()

export default userStore
