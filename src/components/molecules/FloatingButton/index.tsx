import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { FiFeather } from 'react-icons/fi'
import { NewTransactionModal } from '../../modals/NewQuestionModal'

export function FloatingButton() {
  return (
    <>
      <S.FloarButtonContainer>
        <S.AddQuestionFloatingButton>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <S.FloatingButtonContainer>
                <S.FloatingBoxName>
                  <Text size="xs" color="white">
                    Faça sua pergunta
                  </Text>
                </S.FloatingBoxName>
                <S.CirclePlus>
                  <FiFeather size={24} color="#fff" />
                </S.CirclePlus>
              </S.FloatingButtonContainer>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
        </S.AddQuestionFloatingButton>
      </S.FloarButtonContainer>
    </>
  )
}
