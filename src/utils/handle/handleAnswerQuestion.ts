import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useRouter } from 'next/router'
import api from '@/services/api'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { IAnswer } from '@/shared/types'
import { useAnswerStore } from '@/features/stores/answer/useAnswerStore'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import { useConfirmModalStore } from '@/features/stores/modals-stores/confirmModal/useConfirmModal'

const useAnswerHandler = () => {
  const router = useRouter()
  const { token, isLoggedIn } = useAuthStore()
  const { question, setAnswerQuantity, answerQuantity } = useQuestionStore()
  const answerStore = useAnswerStore()
  const { setIsAnswering, setIsAnsweringMobile, setIsAlreadyAnswered } =
    useAnswerModalStore()
  const { setIsModalOpen } = useConfirmModalStore()

  const handleAnswerQuestion = async (data: any) => {
    try {
      if (!token || !isLoggedIn) {
        await router.push('/signin')
        return
      }

      const { content } = data

      const response = await api.post(
        `/answers/${question?.questionData.id}`,
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.status === 201) {
        const newAnswerData: IAnswer = response.data.answer
        setIsAnswering(false)
        setIsAnsweringMobile(false)
        setIsAlreadyAnswered(true)
        setIsModalOpen(false)

        const updatedAnswerQuantity = answerQuantity + 1
        setAnswerQuantity(updatedAnswerQuantity)

        answerStore.setCurrentNewAnswer(newAnswerData)

        answerStore.setAnswers([newAnswerData, ...(answerStore.answers ?? [])])
      } else if (response.status === 400) {
        console.log('Pergunta já respondida')
      }
    } catch (error) {
      console.error('Error creating answer:', error)
      throw error
    }
  }

  return { handleAnswerQuestion }
}

export default useAnswerHandler
