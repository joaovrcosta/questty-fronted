import { IReportTypes } from '@/shared/types'
import { create } from 'zustand'

interface ReportAnswerModalStore {
  reportAnswerTypes: IReportTypes[] | null
  isOpening: boolean
  isModerated: boolean
  setIsModerated: (isModerated: boolean) => void
  setIsOpening: (isOpening: boolean) => void
  setAnswerReportTypes: (reportAnswerTypes: IReportTypes[] | null) => void
}

export const useReportAnswerStore = create<ReportAnswerModalStore>((set) => ({
  reportAnswerTypes: null,
  isOpening: false,
  isModerated: false,
  setIsOpening: (isOpening: boolean) => set({ isOpening }),
  setIsModerated: (isModerated: boolean) => set({ isModerated }),
  setAnswerReportTypes: (reportType: IReportTypes[] | null) =>
    set({ reportAnswerTypes: reportType }),
}))
