import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { Text } from '@/components/atoms/Text'
import { useAnswerModalStore } from '@/features/stores/modals-stores/answerQuestionModal/useAnswerQuestionModal'
import { Heading } from '@/components/atoms/Heading'
import { useConfirmModalStore } from '@/features/stores/modals-stores/confirmModal/useConfirmModal'

export function ConfirmModal() {
  const { setIsOpen, setIsAnswering } = useAnswerModalStore()
  const { setIsModalOpen } = useConfirmModalStore()

  const handleCloseModal = () => {
    setIsOpen(false)
    setIsAnswering(false)
    setIsModalOpen(false)
  }

  const handleCloseConfirmModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Heading size="xs" color="black" weight="semibold">
          Você tem certeza de que quer deixar de responder a esta pergunta?
        </Heading>
        <S.CloseButton onClick={handleCloseConfirmModal}>
          <AiOutlineClose size={24} />
        </S.CloseButton>

        <S.TextContentContainer>
          <Text>Se você sair, um outro usuário vai poder responder!</Text>
        </S.TextContentContainer>
        <S.ButtonsContainer>
          <S.KeepAnsweringButton onClick={handleCloseConfirmModal}>
            Quero continuar e responder
          </S.KeepAnsweringButton>
          <S.ExitButton onClick={handleCloseModal}>
            Sim, quero sair
          </S.ExitButton>
        </S.ButtonsContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
