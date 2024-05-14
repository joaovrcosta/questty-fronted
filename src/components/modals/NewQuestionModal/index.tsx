import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import * as zod from 'zod'
import { AiOutlineClose } from 'react-icons/ai'
import { Tooltip } from '../../molecules/Tooltip'
import { useForm } from 'react-hook-form'
import { SubjectSelect } from '@/components/atoms/SubjectSelect'
import { useState } from 'react'
import { useQuestionModalStore } from '@/features/stores/modals-stores/newQuestionModal/useNewQuestionModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { Spinner } from '@/components/atoms/Spinner'
import api from '@/services/api'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Text } from '@/components/atoms/Text'
import { PointsSelect } from '@/components/atoms/PointsSelect'
import { IoHelpCircleSharp } from 'react-icons/io5'

interface FormData {
  content: string
  subject: string
}

const createNewQuestionFormSchema = zod.object({
  content: zod
    .string()
    .min(20, 'Sua pergunta é muito curta. Use pelo menos 20 caracteres')
    .max(2500, 'A pergunta deve ter no máximo 2500 caracteres'),
  points: zod.enum(['10', '20', '30', '40', '50']).optional(),
  subject: zod.string().nonempty(),
})

export function NewTransactionModal() {
  const { register, handleSubmit, watch, formState, setValue } =
    useForm<FormData>({
      resolver: zodResolver(createNewQuestionFormSchema),
    })

  const { isSubmitting } = formState

  const [subjectValue, setSubjectValue] = useState('')
  const [pointsSelected, setPointsSelected] = useState('10')
  const { setIsOpen } = useQuestionModalStore()
  const { user } = useAuthStore()
  const router = useRouter()

  const handleSelectSubjectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSubject = event.target.value
    setValue('subject', selectedSubject)
    setSubjectValue(selectedSubject)
  }

  const handleSelectPointsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPointsSelected(event.target.value)
  }

  const { token } = useAuthStore()

  const handleCreateNewQuestion = async (data: FormData) => {
    try {
      const { content } = data
      const points = parseInt(pointsSelected, 10)

      const response = await api.post(
        `/questions/${subjectValue}/${user?.grade_id}`,
        {
          content,
          points,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const { id } = response.data

      await router.push(`/tarefa/${id}`)
    } catch (error) {
      console.error('Error creating new question:', error)
      throw error
    }
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.Title style={{ fontSize: '18px' }}>Tire sua dúvida escolar</S.Title>

        <S.CloseButton>
          <AiOutlineClose size={24} />
        </S.CloseButton>

        <form
          onSubmit={handleSubmit(async (data) => {
            await handleCreateNewQuestion(data)
            setIsOpen(false)
          })}
        >
          <S.QuestionTextarea
            {...register('content')}
            placeholder="Escreva sua pergunta aqui. (Para conseguir uma ótima resposta, descreva sua dúvida de forma simples e clara"
          ></S.QuestionTextarea>
          {formState.errors.content && (
            <Text color="danger_500" weight="medium">
              {formState.errors.content.message}
            </Text>
          )}
          {!watch('subject') && formState.errors.subject && (
            <Text color="danger_500" weight="medium">
              Por favor, selecione uma matéria.
            </Text>
          )}
          <S.QuestionMoreInfoContainer>
            {/* <div>
              <S.Tools>
                <Tooltip content="Anexe aqui">
                  <T.IconButton backgroundColor="white">
                    <AiOutlinePaperClip size={24} />
                  </T.IconButton>
                </Tooltip>

                <Tooltip content="Hello!">
                  <T.IconButton backgroundColor="white">
                    <TbMathFunctionY size={24} />
                  </T.IconButton>
                </Tooltip>

                <Tooltip content="aaaaaaaaaaaaaaaa">
                  <T.IconButton backgroundColor="white">
                    <MdOutlineEmojiSymbols size={24} />
                  </T.IconButton>
                </Tooltip>
              </S.Tools>
            </div> */}
            <S.Selects>
              <SubjectSelect onChange={handleSelectSubjectChange} />
              <PointsSelect onChange={handleSelectPointsChange} />
              <Tooltip content="Quanto mais pontos atribuir, mais rapido pode ser sua resposta">
                <IoHelpCircleSharp size={24} />
              </Tooltip>
            </S.Selects>
          </S.QuestionMoreInfoContainer>

          <S.SubmitButtonContainer>
            {isSubmitting ? (
              <Spinner size="sm" baseColor="black" variant="primary" />
            ) : (
              <S.SubmitButton type="submit" disabled={isSubmitting}>
                Fazer pergunta
              </S.SubmitButton>
            )}
          </S.SubmitButtonContainer>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
