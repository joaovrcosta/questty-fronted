import { create } from 'zustand'

interface AnswerModalStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const useAnswerModalStore = create<AnswerModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))
