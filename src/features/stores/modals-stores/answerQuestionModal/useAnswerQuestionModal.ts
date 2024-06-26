import { create } from 'zustand'

interface AnswerModalStore {
  isAnswering: boolean
  isOpen: boolean
  isAnsweringMobile: boolean
  alreadyAnswered: boolean
  setIsOpen: (isOpen: boolean) => void
  setIsAnswering: (isAnswering: boolean) => void
  setIsAnsweringMobile: (isAnsweringMobile: boolean) => void
  setIsAlreadyAnswered: (alreadyAnswered: boolean) => void
}

export const useAnswerModalStore = create<AnswerModalStore>((set) => ({
  isAnswering: false,
  isAnsweringMobile: false,
  isOpen: false,
  alreadyAnswered: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  setIsAnswering: (isAnswering: boolean) => set({ isAnswering }),
  setIsAnsweringMobile: (isAnsweringMobile: boolean) =>
    set({ isAnsweringMobile }),
  setIsAlreadyAnswered: (alreadyAnswered: boolean) => set({ alreadyAnswered }),
}))
