import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from '@phosphor-icons/react'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { TbMathFunctionY } from 'react-icons/tb'
import { MdOutlineEmojiSymbols } from 'react-icons/md'
import { Tooltip } from '../Tooltip'
import * as T from '../Tooltip/styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title style={{ fontSize: '18px' }}>
          Tire sua dúvida escolar
        </Dialog.Title>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form>
          <S.QuestionTextarea placeholder="Escreva sua pergunta aqui. (Para conseguir uma ótima resposta, descreva sua dúvida de forma simples e clara"></S.QuestionTextarea>
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
              <S.SubjectSelect>
                <option value="">Escolha a matéria</option>
              </S.SubjectSelect>
            </S.Selects>
          </S.QuestionMoreInfoContainer>

          <button type="submit">Fazer pergunta</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
