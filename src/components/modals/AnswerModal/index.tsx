import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Text } from '@/components/atoms/Text'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { useForm } from 'react-hook-form'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAnswerStore } from '@/features/stores/answer/useAnswerStore'
import { Spinner } from '@/components/atoms/Spinner'
import { HeaderAnswer } from '@/components/organisms/HeaderAnswer'
import { useEffect, useState } from 'react'
import useAnswerHandler from '@/utils/handle/handleAnswerQuestion'
import { AnswerFormSchema } from '@/utils/zodSchemas'
import { Editor } from '@/components/molecules/Editor'

interface FormData {
  content: string
}

interface AnswerModalProps {
  isMobile: boolean
  id: string
}

export function AnswerModal({ isMobile }: AnswerModalProps) {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(AnswerFormSchema),
  })
  const { setIsOpen, isOpen, isAnswering, setIsAnswering } =
    useAnswerModalStore()
  const { question } = useQuestionStore()
  const { handleAnswerQuestion } = useAnswerHandler()
  const [editorContent, setEditorContent] = useState('')

  const { isSubmitting } = formState

  const handleCloseModal = () => {
    setIsOpen(false)
    setIsAnswering(false)
  }

  const handleEditorChange = (content: any) => {
    setEditorContent(content)
  }

  const submitAnswer = async (data: any) => {
    await handleAnswerQuestion({
      content: editorContent,
    })
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && isOpen) {
        setIsOpen(false)
      }

      if (window.innerWidth >= 768 && !isOpen && isAnswering) {
        setIsOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  return (
    <S.Portal>
      <S.Overlay />
      <S.Content>
        <HeaderAnswer />
        <S.MainContainer>
          <S.QuestionTextContainer>
            <S.QuestionInfoWrapper>
              <Dialog.Title style={{ fontSize: '20px' }}>
                Pergunta:
              </Dialog.Title>
              <S.CloseButtonMobile>
                <S.BackButtonBox onClick={handleCloseModal}>
                  <AiOutlineClose size={24} />
                </S.BackButtonBox>
              </S.CloseButtonMobile>
            </S.QuestionInfoWrapper>
            <S.TextContainer>
              <Text>{question?.questionData?.content}</Text>
            </S.TextContainer>
          </S.QuestionTextContainer>
          <S.FormAnsweringContainer>
            <form
              onSubmit={handleSubmit(async (data) => {
                await submitAnswer(data)
              })}
            >
              <S.HeadingContainer>
                <S.InnerBackButtonBox onClick={handleCloseModal}>
                  <AiOutlineClose size={24} />
                </S.InnerBackButtonBox>
                <Text weight="bold" size="xl" color="blue_950">
                  Sua resposta:
                </Text>
              </S.HeadingContainer>
              {/* <S.QuestionTextarea
                {...register('content')}
                placeholder="Explicação passo a passo:"
              ></S.QuestionTextarea> */}
              <Editor onChange={handleEditorChange} />
              {formState.errors.content && (
                <span style={{ color: '#D20032', fontSize: '14px' }}>
                  {formState.errors.content.message}
                </span>
              )}
              {/* <S.QuestionMoreInfoContainer>
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
            </S.QuestionMoreInfoContainer> */}
              {isSubmitting ? (
                <Spinner size="sm" baseColor="blue_950" variant="primary" />
              ) : (
                <S.AnswerButton
                  variant="lg"
                  rounding="rounded-full"
                  color="white"
                  backgroundColor="black"
                  type="submit"
                >
                  RESPONDER
                </S.AnswerButton>
              )}
            </form>
          </S.FormAnsweringContainer>
        </S.MainContainer>
      </S.Content>
    </S.Portal>
  )
}
