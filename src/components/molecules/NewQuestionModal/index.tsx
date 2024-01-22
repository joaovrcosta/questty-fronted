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
import { Text } from '@/components/atoms/Text'

interface FormData {
  content: string
  subject: string
}

const createNewQuestionFormSchema = zod.object({
  content: zod
    .string()
    .min(20, 'Sua pergunta é muito curta. Use pelo menos 20 caracteres')
    .max(2500, 'A pergunta deve ter no máximo 2500 caracteres'),
})

export function NewTransactionModal() {
  const [isVideoWatched, setIsVideoWatched] = useState(false)

  const { register, handleSubmit, watch, formState } = useForm<FormData>({
    resolver: zodResolver(createNewQuestionFormSchema),
  })

  const { isSubmitting } = formState

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
            <Text color="danger_500" weight="medium">
              {formState.errors.content.message}
            </Text>
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
            {/* <S.SelectPointsContainer>
              <S.SelectPoints>
                <option value="">1 pt</option>
                <option value="">2 pts</option>
                <option value="">3 pts</option>
                <option value="">4 pts</option>
                <option value="">5 pts</option>
                <option value="">6 pts</option>
                <option value="">7 pts</option>
                <option value="">8 pts</option>
                <option value="">9 pts</option>
                <option value="">10 pts</option>
              </S.SelectPoints>
            </S.SelectPointsContainer> */}
          </S.QuestionMoreInfoContainer>

          <div>
            {isSubmitting ? (
              <Spinner size="sm" baseColor="black" variant="primary" />
            ) : (
              <Button
                type="submit"
                backgroundColor="black"
                disabled={isSubmitting}
              >
                Fazer pergunta
              </Button>
            )}
          </div>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
