import { INewAnswer } from '@/shared/types'
import { create } from 'zustand'

interface AnswerStore {
  answer: INewAnswer | null
  currentNewQuestion: INewAnswer | null
  setAnswer: (question: INewAnswer | null) => void
  setCurrentNewAnswer: (newQ: INewAnswer | null) => void
}

export const useAnswerStore = create<AnswerStore>((set) => ({
  answer: null,
  currentNewQuestion: null,
  setAnswer: (newAnswer: INewAnswer | null) => set({ answer: newAnswer }),
  setCurrentNewAnswer: (newAns: INewAnswer | null) =>
    set({ currentNewQuestion: newAns }),
}))
