import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { IoMdAlert, IoMdClose } from 'react-icons/io'
import { useState } from 'react'

export function CardAlert() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    isVisible && (
      <S.CardAlertContainer>
        <S.TextContainer>
          <IoMdAlert size={24} color="#fbbe2e" />
          <Text color="white">Sistemas de pontos indisponível no momento</Text>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.CloseButton onClick={handleClose}>
            <IoMdClose size={24} color="#fff" />
          </S.CloseButton>
        </S.ButtonContainer>
      </S.CardAlertContainer>
    )
  )
}
