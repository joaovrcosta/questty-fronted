import { create } from 'zustand'

interface IsMobileStore {
  isMobile: boolean
  setIsMobile: (isMobile: boolean) => void
}

export const useIsMobileStore = create<IsMobileStore>((set) => ({
  isMobile: false,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
}))
