import { Text } from '@/components/atoms/Text'
import * as S from './styles'
import { TbMathFunction } from 'react-icons/tb'
import Image from 'next/image'
import allSubjects from '@/assets/subjects/all-subjects.svg'
import enem from '@/assets/subjects/enem.svg'
import math from '@/assets/subjects/math.svg'
import history from '@/assets/subjects/history.svg'
import geograph from '@/assets/subjects/geograph.svg'
import biology from '@/assets/subjects/biology.svg'
import portuguese from '@/assets/subjects/portuguese.svg'
import physics from '@/assets/subjects/physics.svg'
import chemistry from '@/assets/subjects/chemistry.svg'
import filosofy from '@/assets/subjects/filosofy.svg'
import sociology from '@/assets/subjects/sociology.svg'
import administration from '@/assets/subjects/administration.svg'
import pedagogy from '@/assets/subjects/pedagogy.svg'
import english from '@/assets/subjects/english.svg'
import art from '@/assets/subjects/art.svg'
import health from '@/assets/subjects/health.svg'
import edfisica from '@/assets/subjects/edfisica.svg'
import contabilidade from '@/assets/subjects/contabilidade.svg'
import law from '@/assets/subjects/direito.svg'
import psicologia from '@/assets/subjects/psicologia.svg'
import programing from '@/assets/subjects/programing.svg'
import logic from '@/assets/subjects/logic.svg'
import edmoral from '@/assets/subjects/edmoral.svg'
import espanhol from '@/assets/subjects/espanol.svg'
import music from '@/assets/subjects/music.svg'

export const SubjectList = () => {
  return (
    <>
      <S.SubjectListContainer>
        <S.ListHeading>
          <Text weight="semibold">Matérias</Text>
        </S.ListHeading>
        <S.SubjectListWrapper>
          <ul>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={allSubjects}
                    width={24}
                    height={24}
                    alt="Todas as matérias"
                  />
                  Todas matérias
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={math} width={24} height={24} alt="Math" />
                  Matematica
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={enem} width={24} height={24} alt="ENEM" />
                  ENEM
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={history} width={24} height={24} alt="History" />
                  História
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={geograph}
                    width={24}
                    height={24}
                    alt="Geografia"
                  />
                  Geografia
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={biology} width={24} height={24} alt="Biologia" />
                  Biologia
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={portuguese}
                    width={24}
                    height={24}
                    alt="Português"
                  />
                  Português
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={physics} width={24} height={24} alt="Física" />
                  Física
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={chemistry} width={24} height={24} alt="Química" />
                  Química
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={filosofy}
                    width={24}
                    height={24}
                    alt="Filosofia"
                  />
                  Filosofia
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={sociology}
                    width={24}
                    height={24}
                    alt="Filosofia"
                  />
                  Sociologia
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={administration}
                    width={24}
                    height={24}
                    alt="Administração"
                  />
                  Administração
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={pedagogy}
                    width={24}
                    height={24}
                    alt="Pedagogia"
                  />
                  Pedagogia
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={english} width={24} height={24} alt="Pedagogia" />
                  Inglês
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={art} width={24} height={24} alt="Pedagogia" />
                  Artes
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={health} width={24} height={24} alt="Pedagogia" />
                  Sáude
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={edfisica}
                    width={24}
                    height={24}
                    alt="Pedagogia"
                  />
                  Ed. Física
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={contabilidade}
                    width={24}
                    height={24}
                    alt="Pedagogia"
                  />
                  Contabilidade
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={law} width={24} height={24} alt="Pedagogia" />
                  Direito
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={psicologia}
                    width={24}
                    height={24}
                    alt="Pedagogia"
                  />
                  Psicologia
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={programing}
                    width={24}
                    height={24}
                    alt="Pedagogia"
                  />
                  Programação
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={logic} width={24} height={24} alt="Pedagogia" />
                  Lógica
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={edmoral} width={24} height={24} alt="Pedagogia" />
                  Ed. Moral
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image
                    src={espanhol}
                    width={24}
                    height={24}
                    alt="Pedagogia"
                  />
                  Espanhol
                </S.SubjectButton>
              </S.Subject>
            </li>
            <li>
              <S.Subject role="button">
                <S.SubjectButton>
                  <Image src={music} width={24} height={24} alt="Pedagogia" />
                  Música
                </S.SubjectButton>
              </S.Subject>
            </li>
          </ul>
        </S.SubjectListWrapper>
      </S.SubjectListContainer>
    </>
  )
}
