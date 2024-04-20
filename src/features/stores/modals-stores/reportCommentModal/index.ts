import { IReportTypes } from '@/shared/types'
import { create } from 'zustand'

interface ReportCommentModalStore {
  reportCommentTypes: IReportTypes[] | null
  isOpening: boolean
  setIsOpening: (isOpening: boolean) => void
  setCommentReportTypes: (reportCommentTypes: IReportTypes[] | null) => void
}

export const useReportCommentStore = create<ReportCommentModalStore>((set) => ({
  reportCommentTypes: null,
  isOpening: false,
  setIsOpening: (isOpening: boolean) => set({ isOpening }),
  setCommentReportTypes: (reportType: IReportTypes[] | null) =>
    set({ reportCommentTypes: reportType }),
}))
