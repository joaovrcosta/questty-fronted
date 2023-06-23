import { useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export type subjectsType =
  | 'math'
  | 'biology'
  | 'history'
  | 'geography'
  | 'chemistry'
  | 'enem'

interface Question {
  id: number
  content: string
  category: subjectsType
  createdAt: string
  answers: {
    id: string
    content: string
    createdAt: string
    thanks: number
  }[]
}

interface CreateQuestionInput {
  title: string
  category: subjectsType
}

interface QuestionContextType {
  questions: Question[]
  fetchTQuestions: (query?: string) => Promise<void>
  createQuestion: (data: CreateQuestionInput) => Promise<void>
}

interface QuestionProviderProps {
  children: React.ReactNode
}

export const QuestionContext = createContext({} as QuestionContextType)

export function QuestionsProvider({ children }: QuestionProviderProps) {
  const [questions, setQuestions] = useState<Question[]>([])

  const fetchTQuestions = useCallback(async (query?: string) => {
    const response = await api.get('questions', {
      params: {
        //Ordena por ondem decrecente levando em consideração a data
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setQuestions(response.data)
    console.log(response.data)
  }, [])

  //Esta função cria uma nova transação, e na hora de criar atualiza o array de transações
  const createQuestion = useCallback(async (data: CreateQuestionInput) => {
    const { title, category } = data

    const response = await api.post('questions', {
      title,
      category,
      createdAt: new Date(),
    })
    //Aqui ela atualiza o array de transações
    setQuestions((state) => [...state, response.data])
  }, [])

  useEffect(() => {
    fetchTQuestions()
  }, [])

  return (
    <QuestionContext.Provider
      value={{ questions, fetchTQuestions, createQuestion }}
    >
      {children}
    </QuestionContext.Provider>
  )
}
