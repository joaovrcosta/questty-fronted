import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { X } from '@phosphor-icons/react'
import {
  AiOutlineArrowLeft,
  AiOutlinePaperClip,
  AiOutlinePlusCircle,
} from 'react-icons/ai'
import { TbMathFunctionY } from 'react-icons/tb'
import { MdOutlineEmojiSymbols } from 'react-icons/md'
import { Tooltip } from '../Tooltip'
import * as T from '../Tooltip/styles'
import { Text } from '@/components/atoms/Text'
import { Avatar } from '@/components/atoms/Avatar'
import Link from 'next/link'

export function AnswerModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.QuestionTextContainer>
          <S.QuestionInfoWrapper>
            <S.AvatarInfoContainer>
              <Avatar
                variant="lg"
                imageUrl="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              />
            </S.AvatarInfoContainer>
            <S.InfoWrapperr>
              <S.UserInfo>
                <S.Username>
                  <Text style={{ fontFamily: 'Poppins' }} weight="medium">
                    joaovrcosta
                  </Text>
                </S.Username>
                <S.UserLevel>27</S.UserLevel>
              </S.UserInfo>
            </S.InfoWrapperr>
          </S.QuestionInfoWrapper>
          <Dialog.Title style={{ fontSize: '18px', marginBottom: '24px' }}>
            Pergunta
          </Dialog.Title>
          <Text>
            Realize os seguintes lançamentos em razonetes a débito e crédito e
            faça o balancete de verificaçãoRealize os seguintes lançamentos em
            razonetes a débito e crédito e faça o balancete de
            verificaçãoRealize os seguintes lançamentos em razonetes a débito e
            crédito e faça o balancete de verificação
          </Text>
        </S.QuestionTextContainer>
        <S.FormAnsweringContainer>
          <form>
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
