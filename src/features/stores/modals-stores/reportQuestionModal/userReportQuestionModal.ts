import { create } from 'zustand'

interface ReportQuestionModalStore {
  isOpening: boolean
  setIsOpening: (isOpening: boolean) => void
}

export const useReportQuestionStore = create<ReportQuestionModalStore>(
  (set) => ({
    isOpening: false,
    setIsOpening: (isOpening: boolean) => set({ isOpening }),
  })
)
