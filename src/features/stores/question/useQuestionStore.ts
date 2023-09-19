import { IQuestionData } from '@/shared/types'
import { create } from 'zustand'

interface QuestionStore {
  question: IQuestionData | null
  setQuestion: (question: IQuestionData | null) => void
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: null,
  setQuestion: (newQuestion: IQuestionData | null) =>
    set({ question: newQuestion }),
}))
