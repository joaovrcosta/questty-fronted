import { SlGraph } from 'react-icons/sl'
import * as S from '../SubjectsSidebar/styles'
import { Text } from '@/components/atoms/Text'
import { PiMathOperationsFill } from 'react-icons/pi'
import { ImEarth } from 'react-icons/im'
import { FaLeaf } from 'react-icons/fa6'

export const YourSubjectsSideBar = () => {
  return (
    <>
      <S.AnswersBySubject>
        <S.RankingBox>
          <S.RankingHeading>
            <SlGraph size={24} color="#45A6FF" />
            <Text weight="semibold">Você se destaca em</Text>
          </S.RankingHeading>
          <S.UserRankingWrapper>
            <S.SubjectContainer>
              <div>
                <PiMathOperationsFill size={24} color="#45A6FF" />
              </div>
              <div>
                <Text weight="semibold">Matemática</Text>
                <Text size="sm">123 respostas</Text>
              </div>
            </S.SubjectContainer>
            <S.SubjectContainer>
              <div>
                <ImEarth size={24} color="#45A6FF" />
              </div>
              <div>
                <Text weight="semibold">Geografia</Text>
                <Text size="sm">123 respostas</Text>
              </div>
            </S.SubjectContainer>
            <S.SubjectContainer>
              <div>
                <FaLeaf size={24} color="#45A6FF" />
              </div>
              <div>
                <Text weight="semibold">Biologia</Text>
                <Text size="sm">123 respostas</Text>
              </div>
            </S.SubjectContainer>
          </S.UserRankingWrapper>
          <S.MoreTextContainer>
            <Text color="blue_950">Ver mais</Text>
          </S.MoreTextContainer>
        </S.RankingBox>
      </S.AnswersBySubject>
    </>
  )
}
