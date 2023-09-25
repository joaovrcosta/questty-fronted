import { create } from 'zustand'

interface QuestionModalStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useQuestionModalStore = create<QuestionModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))
