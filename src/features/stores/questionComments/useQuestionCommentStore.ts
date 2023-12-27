import { IComment } from '@/shared/types'
import { create } from 'zustand'

interface QuestionCommentStore {
  questionComment: IComment[] | null
  currentNewQuestion: IComment[] | null
  setQuestionComment: (comment: IComment[] | null) => void
  setCurrentNewQuestionComment: (newComment: IComment[] | null) => void
  getState: () => QuestionCommentStore
}

export const useQuestionCommentStore = create<QuestionCommentStore>(
  (set, get) => ({
    questionComment: null,
    currentNewQuestion: null,
    setQuestionComment: (newComment: IComment[] | null) =>
      set({ questionComment: newComment }),
    setCurrentNewQuestionComment: (newComment: IComment[] | null) =>
      set({ currentNewQuestion: newComment }),
    getState: () => get(),
  })
)
