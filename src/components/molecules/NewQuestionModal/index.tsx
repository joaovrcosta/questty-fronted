import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import * as T from '../Tooltip/styles'
import * as zod from 'zod'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { TbMathFunctionY } from 'react-icons/tb'
import { MdOutlineEmojiSymbols } from 'react-icons/md'
import { Tooltip } from '../Tooltip'
import { useForm } from 'react-hook-form'
import { SubjectSelect } from '@/components/atoms/SubjectSelect'
import { useState } from 'react'
import { useQuestionModalStore } from '@/features/stores/newQuestionModal/useNewQuestionModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/router'
import { Spinner } from '@/components/atoms/Spinner'
import api from '@/services/api'
import useAuthStore from '@/features/stores/auth/useAuthStore'

interface FormData {
  content: string
  subject: string
}

const createNewQuestionFormSchema = zod.object({
  content: zod
    .string()
    .min(20, 'Sua pergunta é muito curta. Use pelo menos 20 caracteres')
    .max(5000, 'A pergunta deve ter no máximo 5000 caracteres'),
})

export function NewTransactionModal() {
  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    resolver: zodResolver(createNewQuestionFormSchema),
  })

  const { isSubmitting } = formState

  const isContentFilledIn = watch('content')

  const [subject, subjectSelect] = useState('')
  const { setIsOpen } = useQuestionModalStore()
  const router = useRouter()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    subjectSelect(event.target.value)
  }

  const { token } = useAuthStore()

  const handleCreateNewQuestion = async (data: FormData) => {
    try {
      const { content } = data

      const response = await api.post(
        `/questions/${subject}`,
        {
          content,
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
        <Dialog.Title style={{ fontSize: '18px' }}>
          Tire sua dúvida escolar
        </Dialog.Title>

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
            <span style={{ color: '#D20032' }}>
              {formState.errors.content.message}
            </span>
          )}
          <S.QuestionMoreInfoContainer>
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
            <S.Selects>
              <SubjectSelect onChange={handleSelectChange} />
            </S.Selects>
          </S.QuestionMoreInfoContainer>

          {isSubmitting ? (
            <Spinner size="sm" baseColor="blue_950" variant="primary" />
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              Fazer pergunta
            </Button>
          )}
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
