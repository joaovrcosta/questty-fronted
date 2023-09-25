import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from '@phosphor-icons/react'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { TbMathFunctionY } from 'react-icons/tb'
import { MdOutlineEmojiSymbols } from 'react-icons/md'
import { Tooltip } from '../Tooltip'
import * as T from '../Tooltip/styles'
import api from '@/services/api'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useForm } from 'react-hook-form'
import { SubjectSelect } from '@/components/atoms/SubjetSelect'
import { useRef, useState } from 'react'
import { useQuestionModalStore } from '@/features/stores/newQuestionModal/useNewQuestionModal'

interface FormData {
  content: string
  subject: string
}

export function NewTransactionModal() {
  const closeDialogRef = useRef<() => void | null>(null)
  const [subject, subjectSelect] = useState('')
  const { setIsOpen } = useQuestionModalStore()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    subjectSelect(event.target.value)
  }

  const { register, handleSubmit } = useForm<FormData>()
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

      if (response.status === 201) {
        closeDialogRef.current?.()
      }
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
          <X size={24} />
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

          <button type="submit">Fazer pergunta</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
