import { IAnswer } from '@/shared/types'
import { create } from 'zustand'

interface AnswerStore {
  displayAnswerButton: boolean
  answers: IAnswer[] | null
  currentNewAnswer: IAnswer | null
  setAnswers: (newAnswers: IAnswer[] | null) => void
  setCurrentNewAnswer: (newAns: IAnswer | null) => void
  setDisplayAnswerButton: (displayAnswerButton: boolean) => void
}

export const useAnswerStore = create<AnswerStore>((set) => ({
  displayAnswerButton: true,
  answers: null,
  currentNewAnswer: null,
  setAnswers: (newAnswers: IAnswer[] | null) => set({ answers: newAnswers }),
  setCurrentNewAnswer: (newAns: IAnswer | null) =>
    set({ currentNewAnswer: newAns }),
  setDisplayAnswerButton: (displayAnswerButton: boolean) =>
    set({ displayAnswerButton }),
}))
