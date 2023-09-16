import { IQuestion } from '@/shared/types'
import { create } from 'zustand'

interface QuestionStore {
  question: IQuestion | null
  setQuestion: (question: IQuestion | null) => void
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: null,
  setQuestion: (newQuestion: IQuestion | null) =>
    set({ question: newQuestion }),
}))
