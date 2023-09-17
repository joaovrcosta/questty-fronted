export interface IQuestion {
  id: string
  content: string
  bestAnswerId: string
  author_id: string
  author: {
    name: string
  }
  deleted: boolean
  category_id: string
  updatedAt: string
  deletedAt: string
  createdAt: string
  answers: IAnswer[]
}

export interface IAnswer {
  id: string
  content: string
  isGolden: boolean
  author_id: string
  author: {
    name: string
  }
  question_id: string
  createdAt: string
  deletedAt: string
  updatedAt: string
  deleted: boolean
  likes: ILike[]
}

export interface ILike {
  id: string
  author_id: string
  answer_id: string
  createdAt: string
}
