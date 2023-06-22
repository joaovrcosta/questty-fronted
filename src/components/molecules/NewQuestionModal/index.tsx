import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from '@phosphor-icons/react'
import { UploadBox } from '../UploadBox'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>Digite o titulo da sua pergunta</Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form>
          <S.QuestionTextarea></S.QuestionTextarea>
          <S.QuestionMoreInfoContainer>
            <select name="" id="">
              <option value="">Numero1</option>
            </select>
            {/* <UploadBox label="ola">{children}</UploadBox> */}
          </S.QuestionMoreInfoContainer>

          <button type="submit">Faça sua pergunta</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
