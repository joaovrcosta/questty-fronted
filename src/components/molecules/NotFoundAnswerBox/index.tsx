import * as S from './styles'
import notFoundImg from '../../../assets/notFound.svg'
import Image from 'next/image'
import { Text } from '@/components/atoms/Text'

export function NotFoundAnswersBox() {
  return (
    <S.Container>
      <S.NotFoundAnwersContainer>
        <Text weight="regular" color="blue_950" style={{ fontFamily: 'Inter' }}>
          Ué... Seja o primeiro a responder
        </Text>
        <Image src={notFoundImg} width={100} height={100} alt="" />
      </S.NotFoundAnwersContainer>
    </S.Container>
  )
}
