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
  subject_id: string
  updatedAt: string
  deletedAt: string
  createdAt: string
  points: number
  subject: {
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
    content: string
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
  grade_id: number
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
    points: number
    email: string
    createdAt: string
    questions: IQuestion[]
    answers: IAnswer[]
    rank: {
      id: number
      name: string
      color: string
      description: string
      points: number
      bestResponses: number
    }
  }

  answersData: {
    answers: IAnswer[]
  }
}

export interface IUserInfo {
  userData: {
    id: string
    name: string
    username: string
    code: Number
    avatar_url: string
    points: number
    email: string
    createdAt: string
    questions: IQuestion[]
    answers: IAnswer[]
    rank: {
      id: number
      name: string
      color: string
      description: string
      points: number
      bestResponses: number
    }
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
    subject_id: string
    points: number
    answers: IAnswer[]
    author: {
      name: string
      username: string
      avatar_url: string
    }
    subject: {
      id: string
      name: string
    }
    comments?: IComment[] | null
  }
  isLoggedIn?: boolean
  recomendedQuestions: any
}

export interface IReportSubCategory {
  id: string
  text: string
}

export interface IReportTypes {
  id: string
  text: string
  subcategories: IReportSubCategory[]
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
