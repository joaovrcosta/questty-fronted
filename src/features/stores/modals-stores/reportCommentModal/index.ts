import { IReportTypes } from '@/shared/types'
import { create } from 'zustand'

interface ReportCommentModalStore {
  reportCommentTypes: IReportTypes[] | null
  isOpening: boolean
  comments: string[]
  setIsOpening: (isOpening: boolean) => void
  addComment: (commentId: string) => void
  setCommentReportTypes: (reportCommentTypes: IReportTypes[] | null) => void
}

export const useReportCommentStore = create<ReportCommentModalStore>((set) => ({
  reportCommentTypes: null,
  isOpening: false,
  comments: [],
  setIsOpening: (isOpening: boolean) => set({ isOpening }),
  addComment: (commentId: string) =>
    set((state) => ({ comments: [...state.comments, commentId] })),
  setCommentReportTypes: (reportType: IReportTypes[] | null) =>
    set({ reportCommentTypes: reportType }),
}))
