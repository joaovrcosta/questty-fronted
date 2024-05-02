import { IReportTypes } from '@/shared/types'
import { create } from 'zustand'

interface ReportQuestionModalStore {
  reportQuestionTypes: IReportTypes[] | null
  isOpening: boolean
  questions: string[]
  setIsOpening: (isOpening: boolean) => void
  setQuestionReportTypes: (reportQuestionTypes: IReportTypes[] | null) => void
  addQuestion: (questionId: string) => void
}

export const useReportQuestionHomeStore = create<ReportQuestionModalStore>(
  (set) => ({
    reportQuestionTypes: null,
    isOpening: false,
    questions: [],
    setIsOpening: (isOpening: boolean) => set({ isOpening }),
    addQuestion: (questionId: string) =>
      set((state) => ({ questions: [...state.questions, questionId] })),
    setQuestionReportTypes: (reportType: IReportTypes[] | null) =>
      set({ reportQuestionTypes: reportType }),
  })
)
