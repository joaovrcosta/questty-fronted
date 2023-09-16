import { IQuestion } from '@/shared/types'
import { create } from 'zustand'

export interface IQuestionType {
  questions: Array<IQuestion[]>
}

interface QuestionsStore {
  questions: IQuestion[] | null
  setQuestions: (questions: IQuestion[] | null) => void // Função personalizada de atualização
}

export const useQuestionsStore = create<QuestionsStore>((set) => ({
  questions: null,
  setQuestions: (newQuestions: IQuestion[] | null) =>
    set({ questions: newQuestions }),
}))
