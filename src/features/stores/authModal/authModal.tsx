import { create } from 'zustand'

interface AuthModalStore {
  isOpening: boolean
  setIsOpening: (isOpening: boolean) => void
}

export const useAuthModalStore = create<AuthModalStore>((set) => ({
  isOpening: false,
  setIsOpening: (isOpening: boolean) => set({ isOpening }),
}))
