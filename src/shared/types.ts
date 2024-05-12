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
  reports: IReport[]
}

export interface IAnswer {
  id: string
  content: string
  isGolden: boolean
  author_id: string
  totalLikes: number
  author: {
    name: string
    username: string
    avatar_url: string
    level: number
  }
  reports: IReport[]
  comments: IComment[]
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

export interface IReport {
  id: string
  isOpen: boolean
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
  rank: {
    id: number
    name: string
    description: string
    color: string
    points: number
    bestResponses: number
  }
}

export interface IProfileData {
  userData: {
    id: string
    name: string
    username: string
    code: Number
    avatar_url: string
    points: number
    role: string
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
    followCount: {
      followers: number
      followings: number
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
    role: string
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
    followCount: {
      followers: number
      followings: number
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
      level: number
    }
    subject: {
      id: string
      name: string
    }
    comments?: IComment[] | null
    reports: IReport[]
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
  reports: IReport[]
}
