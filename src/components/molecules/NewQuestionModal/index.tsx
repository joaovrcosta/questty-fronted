import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from '@phosphor-icons/react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Faça sua pergunta</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
