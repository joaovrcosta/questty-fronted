import { IQuestionData } from '@/shared/types'
import { create } from 'zustand'

interface QuestionStore {
  question: IQuestionData | null
  currentNewQuestion: IQuestionData | null
  setQuestion: (question: IQuestionData | null) => void
  setCurrentNewQuestion: (newQ: IQuestionData | null) => void
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: null,
  currentNewQuestion: null,
  setQuestion: (newQuestion: IQuestionData | null) =>
    set({ question: newQuestion }),
  setCurrentNewQuestion: (newQ: IQuestionData | null) =>
    set({ currentNewQuestion: newQ }),
}))
