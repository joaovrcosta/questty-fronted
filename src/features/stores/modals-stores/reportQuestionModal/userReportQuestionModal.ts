import { IReportTypes } from '@/shared/types'
import { create } from 'zustand'

interface ReportQuestionModalStore {
  reportQuestionTypes: IReportTypes[] | null
  isOpening: boolean
  isModerated: boolean
  setIsOpening: (isOpening: boolean) => void
  setQuestionReportTypes: (reportQuestionTypes: IReportTypes[] | null) => void
  setIsModerated: (isModerated: boolean) => void
}

export const useReportQuestionStore = create<ReportQuestionModalStore>(
  (set) => ({
    reportQuestionTypes: null,
    isOpening: false,
    isModerated: false,
    setIsOpening: (isOpening: boolean) => set({ isOpening }),
    setIsModerated: (isModerated: boolean) => set({ isModerated }),
    setQuestionReportTypes: (reportType: IReportTypes[] | null) =>
      set({ reportQuestionTypes: reportType }),
  })
)
