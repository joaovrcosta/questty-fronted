import { IQuestionData } from '@/shared/types'
import { create } from 'zustand'

interface QuestionStore {
  question: IQuestionData | null
  answerQuantity: number
  currentNewQuestion: IQuestionData | null
  setQuestion: (question: IQuestionData | null) => void
  setCurrentNewQuestion: (newQ: IQuestionData | null) => void
  setAnswerQuantity: (quantity: number) => void
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  question: null,
  currentNewQuestion: null,
  answerQuantity: 0,
  setQuestion: (newQuestion: IQuestionData | null) =>
    set({ question: newQuestion }),
  setCurrentNewQuestion: (newQ: IQuestionData | null) =>
    set({ currentNewQuestion: newQ }),
  setAnswerQuantity: (quantity: number) => set({ answerQuantity: quantity }),
}))
