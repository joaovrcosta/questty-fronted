import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Text } from '@/components/atoms/Text'
import { Avatar } from '@/components/atoms/Avatar'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import api from '@/services/api'
import { useForm } from 'react-hook-form'
import { useAnswerModalStore } from '@/features/stores/answerQuestionModal/useAnswerQuestionModal'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAnswerStore } from '@/features/stores/answer/useAnswerStore'
import { Spinner } from '@/components/atoms/Spinner'

interface FormData {
  content: string
}

const AnswerFormSchema = zod.object({
  content: zod
    .string()
    .min(20, 'Mas já?! Escreva no mínimo 20 caracteres para explicar melhor.')
    .refine(
      (content) => {
        const words = content.split(/\s+/)
        return !words.some((word) => word.length > 46)
      },
      {
        message: 'Nenhuma palavra deve ter mais de 46 letras.',
        path: ['content'],
      }
    ),
})

export function AnswerModal({ id }: { id: string }) {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(AnswerFormSchema),
  })
  const { setIsOpen } = useAnswerModalStore()
  const { question } = useQuestionStore()
  const { token } = useAuthStore()
  const answerStore = useAnswerStore()

  console.log()

  const { isSubmitting } = formState

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
        answerStore.setAnswer(response.data)
      }
      if (response.status === 400) {
        console.log('Pergunta já respondida')
      }
    } catch (error) {
      console.error('Error creating answer:', error)
      throw error
    }
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.QuestionTextContainer>
          <S.QuestionInfoWrapper>
            <S.AvatarInformationContainer>
              <S.AvatarInfoContainer>
                <Avatar
                  id={String(id)}
                  variant="lg"
                  imageUrl={
                    question?.questionData.author.avatar_url
                      ? question?.questionData.author.avatar_url
                      : null
                  }
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
            </S.AvatarInformationContainer>
            <S.CloseButtonMobile>
              <S.BackButtonBox onClick={handleCloseModal}>
                <AiOutlineClose size={24} />
              </S.BackButtonBox>
            </S.CloseButtonMobile>
          </S.QuestionInfoWrapper>
          <Dialog.Title style={{ fontSize: '18px', marginBottom: '1rem' }}>
            Pergunta:
          </Dialog.Title>
          <S.TextContainer>
            <Text>{question?.questionData.content}</Text>
          </S.TextContainer>
        </S.QuestionTextContainer>
        <S.FormAnsweringContainer>
          <form
            onSubmit={handleSubmit(async (data) => {
              await handleAnswerQuestion(data)
              setIsOpen(false)
            })}
          >
            <S.HeadingContainer>
              <S.InnerBackButtonBox onClick={handleCloseModal}>
                <AiOutlineClose size={24} />
              </S.InnerBackButtonBox>
              <Text weight="bold" size="xl" color="blue_950">
                Responda
              </Text>
            </S.HeadingContainer>
            <S.QuestionTextarea
              {...register('content')}
              placeholder="Explicação passo a passo:"
            ></S.QuestionTextarea>
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
              >
                FAÇA A SUA PERGUNTA
              </S.AnswerButton>
            )}
          </form>
        </S.FormAnsweringContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
