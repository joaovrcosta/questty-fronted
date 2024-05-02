import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import api from '@/services/api'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Heading } from '@/components/atoms/Heading'
import { IoMdClose } from 'react-icons/io'
import { IReportTypes } from '@/shared/types'
import { Button } from '@/components/atoms/Button'
import { z } from 'zod'
import { Spinner } from '@/components/atoms/Spinner'
import { useReportCommentStore } from '@/features/stores/modals-stores/reportCommentModal'

interface FormData {
  reportType: string
}

export function ReportCommentModal(props: any) {
  const [reportTypes, setReportTypes] = useState<IReportTypes[]>([])
  const [isReportTypeSelected, setIsReportTypeSelected] = useState(false)
  const [selectedReportType, setSelectedReportType] = useState<
    string | undefined
  >('1')
  const [selectedReportTypeId, setSelectedReportTypeId] = useState<
    string | null
  >(null)
  const { token, user } = useAuthStore()
  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { isSubmitting },
  } = useForm<FormData>()
  const { setIsOpening, addComment } = useReportCommentStore()

  const mapReportType = (reportTypeId: string): string => {
    switch (selectedReportTypeId) {
      case '1':
        return 'LINKS'
      case '2':
        return 'INAPPROPRIATE_QUESTION'
      case '3':
        return 'OFFENSIVE_CONTENT'
      case '4':
        return 'INCORRECT_MATERIAL'
      case '5':
        return 'ADVERTISEMENT'
      case '6':
        return 'PERSONAL_DATA_QUESTION'
      case '7':
        return 'LIVE_EXAM_QUESTION'
      default:
        return ''
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/list-report-group-by-id/2', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        const reportTypes = res.data.ReportType
        setReportTypes(reportTypes)
      } catch (error) {
        // Tratar erros aqui
      }
    }

    fetchData()
  }, [token])

  const handleReportTypeChange = (selectedReportTypeId: any) => {
    setSelectedReportType(selectedReportTypeId)
    setIsReportTypeSelected(true)
  }

  const handleCloseModal = () => {
    setIsOpening(false)
  }

  const onSubmit = async () => {
    try {
      const categoryType = mapReportType(selectedReportTypeId || '')
      const reportData = {
        content: '',
        authorId: user?.id,
        categoryType: categoryType,
        reportTypeId: Number(selectedReportTypeId),
        entityId: props.entityId,
        entityType: props.entityType,
      }

      const response = await api.post('/report', reportData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      const commentId = props.entityId
      addComment(commentId)
      setIsOpening(false)
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Erro de validação:', error.errors)
      } else {
        console.error('Erro:', error)
      }
    }
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <S.MainContainer>
          <S.CloseButtonContainer>
            <button onClick={handleCloseModal}>
              <IoMdClose size={28} />
            </button>
          </S.CloseButtonContainer>
          <S.LoginContainerContent>
            <S.EnterHeader>
              <Heading
                weight="extrabold"
                size="md"
                color="blue_950"
                style={{ marginBottom: '0.5rem' }}
              >
                Denunciar comentário
              </Heading>
            </S.EnterHeader>
            <S.SubHeader>
              <Text size="xs" style={{ fontSize: '15px' }}>
                Escolha uma razão para denúnciar este comentário:
              </Text>
            </S.SubHeader>
            <S.FormContainer onSubmit={handleSubmitForm(onSubmit)}>
              <S.ItemsContainer>
                {reportTypes &&
                  reportTypes.map((type: IReportTypes) => (
                    <S.Label key={type.id}>
                      <input
                        type="radio"
                        {...register('reportType')}
                        value={type.id}
                        onChange={(event) => {
                          handleReportTypeChange(event.target.value)
                          setSelectedReportTypeId(event.target.value)
                        }}
                      />
                      {type.text}
                      {selectedReportTypeId === type.id &&
                        type.subcategories.length > 0 && (
                          <select>
                            {type.subcategories.map((subcategory, index) => (
                              <option key={index} value={subcategory.text}>
                                {subcategory.text}
                              </option>
                            ))}
                          </select>
                        )}
                    </S.Label>
                  ))}
              </S.ItemsContainer>
              <S.SubmitButtonContainer>
                {isSubmitting ? (
                  <Spinner size="md" baseColor="blue_950" variant="primary" />
                ) : (
                  <Button
                    backgroundColor="black"
                    color="white"
                    type="submit"
                    disabled={!isReportTypeSelected || isSubmitting}
                  >
                    {' '}
                    Enviar Relatório
                  </Button>
                )}
              </S.SubmitButtonContainer>
            </S.FormContainer>
          </S.LoginContainerContent>
        </S.MainContainer>
      </S.Content>
    </Dialog.Portal>
  )
}
