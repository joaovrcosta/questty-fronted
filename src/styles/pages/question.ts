import styled from 'styled-components'

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  margin-bottom: 4rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 920px) {
    margin-left: 0;
    padding: 0 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 769px) {
    padding: 3rem 2rem;
  }
`

export const NewQuestionFormContainer = styled.div`
  border: 1px solid #000;
  padding: 2rem;
  border-radius: 1rem;
  width: 640px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 1.75rem;
  }

  @media (max-width: 769px) {
    padding: 1.5rem;
  }
`

export const FormTitle = styled.div`
  padding: 0 0 1rem 0;
  resize: none;
`

export const QuestionTextarea = styled.textarea`
  width: 100%;
  border-radius: 1rem;
  height: 10.5rem;
  padding: 0.5rem 1rem;
  font-family: 'Poppins';
`

export const TextareaContainer = styled.div`
  width: 100%;
`

export const SelectContainer = styled.div`
  padding: 1.5rem 0;
`

export const ButtonContainer = styled.div`
  padding: 1rem 0;
`
export const HeroContainer = styled.div`
  max-width: 320px;
  line-height: 40px;

  @media (max-width: 920px) {
    display: none;
  }
`
