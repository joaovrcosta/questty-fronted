import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { useAnswerModalStore } from '@/features/stores/answerQuestionModal/useAnswerQuestionModal'
import { IoMdClose } from 'react-icons/io'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Text } from '@/components/atoms/Text'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnswerFormSchema } from '@/utils/zodSchemas'
import { Button } from '@/components/atoms/Button'
import useAnswerHandler from '@/utils/handle/handleAnswerQuestion'
import { Spinner } from '@/components/atoms/Spinner'

interface AnswerMobileEditor {
  avatarUrl: string | undefined
}

interface FormData {
  content: string
}

export function AnswerMobileEditor({ avatarUrl }: AnswerMobileEditor) {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(AnswerFormSchema),
  })
  const { question } = useQuestionStore()
  const { setIsAnsweringMobile, setIsAnswering } = useAnswerModalStore()
  const { user } = useAuthStore()
  const { handleAnswerQuestion } = useAnswerHandler()
  const { isSubmitting } = formState

  return (
    <>
      <S.AnswerEditorContainer
        onSubmit={handleSubmit(async (data) => {
          await handleAnswerQuestion(data)
        })}
      >
        <form>
          <S.UserInformationsContainer>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Avatar
                id={String(question?.questionData?.author_id)}
                variant="sm"
                imageUrl={avatarUrl ? avatarUrl : null}
              />
              <Text>{user?.username}</Text>
            </div>
            <div>
              <S.CloseButtonMobile
                onClick={() => {
                  setIsAnsweringMobile(false)
                  setIsAnswering(false)
                }}
              >
                <IoMdClose size={24} color="#000" />
              </S.CloseButtonMobile>
            </div>
          </S.UserInformationsContainer>
          <div>
            <S.TextArea
              {...register('content')}
              placeholder="Explicação passo a passo:"
            ></S.TextArea>
            {isSubmitting ? (
              <Spinner size="sm" baseColor="blue_950" variant="primary" />
            ) : (
              <Button
                variant="lg"
                rounding="rounded-full"
                color="white"
                backgroundColor="black"
                type="submit"
              >
                RESPONDER
              </Button>
            )}
          </div>
        </form>
      </S.AnswerEditorContainer>
    </>
  )
}
