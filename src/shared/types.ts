export interface IQuestion {
  id: string
  content: string
  bestAnswerId: string
  author_id: string
  author: {
    name: string
    avatar_url: string
    username: string
  }
  deleted: boolean
  category_id: string
  updatedAt: string
  deletedAt: string
  createdAt: string
  category: {
    name: string
  }
  answers: IAnswer[]
}

export interface IAnswer {
  id: string
  content: string
  isGolden: boolean
  author_id: string
  author: {
    name: string
    username: string
    avatar_url: string
  }
  question_id: string
  createdAt: string
  deletedAt: string
  updatedAt: string
  deleted: boolean
  likes: ILike[]
  category: {
    name: string
  }
  question: {
    category: {
      name: string
    }
  }
}

export interface INewAnswer {
  answer: {
    id: string
    content: string
    isGolden: boolean
    author_id: string
    author: {
      name: string
      avatar_url: string
      username: string
    }
    question_id: string
    createdAt: string
    deletedAt: string
    updatedAt: string
    deleted: boolean
    likes: ILike[]
  }
}

export interface ILike {
  id: string
  author_id: string
  answer_id: string
  createdAt: string
}

export interface IStudent {
  id: string
  name: string
  username: string
  avatar_url: string
  code: Number
  email: string
  createdAt: string
  answers: IAnswer[]
  questions: IQuestion[]
}

export interface ICurrentUserData {
  id: string
  name: string
  username: string
  avatar_url: string
  code: Number
  email: string
  createdAt: string
  answers: IAnswer[]
  questions: IQuestion[]
}

export interface IProfileData {
  userData: {
    id: string
    name: string
    username: string
    code: Number
    avatar_url: string
    email: string
    createdAt: string
    questions: IQuestion[]
    answers: IAnswer[]
  }

  answersData: {
    answers: IAnswer[]
  }
}

export interface IQuestionData {
  questionData: {
    id: string
    content: string
    bestAnswerId: string
    author_id: string
    createdAt: string
    deletedAt: string
    updated_at: string
    category_id: string
    answers: IAnswer[]
    author: {
      name: string
      username: string
      avatar_url: string
    }
    category: {
      name: string
    }
    comments?: IComment[] | null
  }
  isLoggedIn?: boolean
}

export interface ICategories {
  id: string
  name: string
  createdAt: string
  deletedAt: string
  deleted: boolean
}

export interface IComment {
  id: string
  content: string
  categoryType?: string
  author_id: string
  answer_id: string
  question_id: string
  createdAt: Date
  deletedAt?: Date
  updated_at?: Date
  deleted?: boolean
  author?: {
    avatar_url: string
  }
  avatar_url: string
}
