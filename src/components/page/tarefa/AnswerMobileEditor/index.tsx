import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { useQuestionStore } from '@/features/stores/question/useQuestionStore'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import { IoMdClose } from 'react-icons/io'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { Text } from '@/components/atoms/Text'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnswerFormSchema } from '@/utils/zodSchemas'
import { Button } from '@/components/atoms/Button'
import useAnswerHandler from '@/utils/handle/handleAnswerQuestion'
import { Spinner } from '@/components/atoms/Spinner'
import { IoMdSend } from 'react-icons/io'

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
  const { setIsAnsweringMobile, setIsAnswering, setIsOpen } =
    useAnswerModalStore()
  const { user } = useAuthStore()
  const { handleAnswerQuestion } = useAnswerHandler()
  const { isSubmitting } = formState

  function onSubmit(data: FormData) {
    handleAnswerQuestion(data)
  }

  return (
    <>
      <S.AnswerEditorContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.UserInformationsContainer>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Avatar
                id={String(question?.questionData?.author_id)}
                variant="sm"
                imageUrl={avatarUrl ? avatarUrl : null}
              />
              <Text>{user?.username}</Text>
              <Text>{user?.rank.name}</Text>
            </div>
            <div>
              <S.CloseButtonMobile
                onClick={() => {
                  setIsAnsweringMobile(false)
                  setIsAnswering(false)
                  setIsOpen(false)
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
            {formState.errors.content && (
              <Text style={{ color: '#D20032' }}>
                {formState.errors.content.message}
              </Text>
            )}
            {isSubmitting ? (
              <Spinner size="sm" baseColor="blue_950" variant="secondary" />
            ) : (
              <Button
                variant="lg"
                rounding="rounded-full"
                color="white"
                backgroundColor="black"
                type="submit"
                style={{ height: '3rem', width: '100%', marginTop: '1rem' }}
              >
                <IoMdSend size={24} />
                RESPONDER
              </Button>
            )}
          </div>
        </form>
      </S.AnswerEditorContainer>
    </>
  )
}
