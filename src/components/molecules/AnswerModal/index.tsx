import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from '@phosphor-icons/react'
import { AiOutlinePaperClip, AiOutlinePlusCircle } from 'react-icons/ai'
import { TbMathFunctionY } from 'react-icons/tb'
import { MdOutlineEmojiSymbols } from 'react-icons/md'
import { Tooltip } from '../Tooltip'
import * as T from '../Tooltip/styles'
import { Text } from '@/components/atoms/Text'
import { Avatar } from '@/components/atoms/Avatar'
import Link from 'next/link'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import api from '@/services/api'
import { useForm } from 'react-hook-form'
import { useQuestionModalStore } from '@/features/stores/newQuestionModal/useNewQuestionModal'

interface FormData {
  content: string
}

export function AnswerModal({ id }: { id: string }) {
  const { register, handleSubmit } = useForm<FormData>()
  const { setIsOpen } = useQuestionModalStore()
  const { question } = useQuestionStore()
  const { token } = useAuthStore()

  const handleAnswerQuestion = async (data: FormData) => {
    try {
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
        window.location.reload()
      }
    } catch (error) {
      console.error('Error creating answer:', error)
      throw error
    }
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.QuestionTextContainer>
          <S.QuestionInfoWrapper>
            <S.AvatarInfoContainer>
              <Avatar
                id={String(id)}
                variant="lg"
                imageUrl="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              />
            </S.AvatarInfoContainer>
            <S.InfoWrapperr>
              <S.UserInfo>
                <S.Username>
                  <Text style={{ fontFamily: 'Poppins' }} weight="medium">
                    {question?.questionData.author.name}
                  </Text>
                </S.Username>
                {/* <S.UserLevel>27</S.UserLevel> */}
              </S.UserInfo>
            </S.InfoWrapperr>
          </S.QuestionInfoWrapper>
          <Dialog.Title style={{ fontSize: '18px', marginBottom: '24px' }}>
            Pergunta
          </Dialog.Title>
          <Text>{question?.questionData.content}</Text>
        </S.QuestionTextContainer>
        <S.FormAnsweringContainer>
          <form
            onSubmit={handleSubmit(async (data) => {
              await handleAnswerQuestion(data)
              setIsOpen(false)
            })}
          >
            <S.HeadingContainer>
              <Link href="/">
                <S.BackButtonBox>
                  <X size={24} />
                </S.BackButtonBox>
              </Link>
              <Text weight="bold" size="xl" color="blue_950">
                Responda
              </Text>
            </S.HeadingContainer>
            <S.QuestionTextarea
              placeholder="Escreva sua pergunta aqui. (Para conseguir uma ótima resposta, descreva sua dúvida de forma simples e clara"
              {...register('content')}
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
            </S.QuestionMoreInfoContainer>
            <button type="submit">
              <AiOutlinePlusCircle size={24} />
              Responder
            </button>
          </form>
        </S.FormAnsweringContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
