import { IAnswer, INewAnswer } from '@/shared/types'
import { create } from 'zustand'

interface AnswerStore {
  answers: IAnswer[] | null
  currentNewQuestion: IAnswer | null
  setAnswers: (answers: IAnswer[] | null) => void
  setCurrentNewAnswer: (newQ: IAnswer | null) => void
}

export const useAnswerStore = create<AnswerStore>((set) => ({
  answers: null,
  currentNewQuestion: null,
  setAnswers: (newAnswers: IAnswer[] | null) => set({ answers: newAnswers }),
  setCurrentNewAnswer: (newAns: IAnswer | null) =>
    set({ currentNewQuestion: newAns }),
}))
