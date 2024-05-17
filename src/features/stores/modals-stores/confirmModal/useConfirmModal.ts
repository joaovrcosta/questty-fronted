import { create } from 'zustand'

interface ConfirmModalStore {
  isAnswering: boolean
  isModalOpen: boolean
  isAnsweringMobile: boolean
  alreadyAnswered: boolean
  setIsModalOpen: (isOpen: boolean) => void
  setIsAnswering: (isAnswering: boolean) => void
  setIsAnsweringMobile: (isAnsweringMobile: boolean) => void
  setIsAlreadyAnswered: (alreadyAnswered: boolean) => void
}

export const useConfirmModalStore = create<ConfirmModalStore>((set) => ({
  isAnswering: false,
  isAnsweringMobile: false,
  isModalOpen: false,
  alreadyAnswered: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen }),
  setIsAnswering: (isAnswering: boolean) => set({ isAnswering }),
  setIsAnsweringMobile: (isAnsweringMobile: boolean) =>
    set({ isAnsweringMobile }),
  setIsAlreadyAnswered: (alreadyAnswered: boolean) => set({ alreadyAnswered }),
}))
