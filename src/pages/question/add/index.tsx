import * as S from '@/styles/pages/question'
import { Text } from '@/components/atoms/Text'
import { SubjectSelect } from '@/components/atoms/SubjectSelect'
import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'

export default function Profile() {
  return (
    <>
      <S.QuestionContainer>
        <S.NewQuestionFormContainer>
          <S.FormTitle>
            <Text>Tire sua dúvida escolar</Text>
          </S.FormTitle>
          <S.TextareaContainer>
            <S.QuestionTextarea placeholder="Tire sua dúvida e pergunta aqui"></S.QuestionTextarea>
          </S.TextareaContainer>
          <S.SelectContainer>
            <SubjectSelect />
          </S.SelectContainer>
          <S.ButtonContainer>
            <Button backgroundColor="black" color="white">
              FAÇA SUA PERGUNTA
            </Button>
          </S.ButtonContainer>
        </S.NewQuestionFormContainer>
        <S.HeroContainer>
          <Heading weight="extrabold" color="blue_500" size="lgg">
            NENHUMA PERGUNTA É TÃO BÁSICA QUE NÃO POSSA SER FEITA
          </Heading>
        </S.HeroContainer>
      </S.QuestionContainer>
    </>
  )
}
