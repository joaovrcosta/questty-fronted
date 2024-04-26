import { IReportTypes } from '@/shared/types'
import { create } from 'zustand'

interface ReportQuestionModalStore {
  reportQuestionTypes: IReportTypes[] | null
  isOpening: boolean
  setIsOpening: (isOpening: boolean) => void
  setQuestionReportTypes: (reportQuestionTypes: IReportTypes[] | null) => void
}

export const useReportQuestionStore = create<ReportQuestionModalStore>(
  (set) => ({
    reportQuestionTypes: null,
    isOpening: false,
    setIsOpening: (isOpening: boolean) => set({ isOpening }),
    setQuestionReportTypes: (reportType: IReportTypes[] | null) =>
      set({ reportQuestionTypes: reportType }),
  })
)
