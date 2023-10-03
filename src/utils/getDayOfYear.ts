import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getDayOfYear(createdAt?: string) {
  if (!createdAt) {
    return 'Data inválida' // ou alguma mensagem padrão
  }

  try {
    const parsedCreatedAt = parseISO(createdAt)
    const formattedDate = format(parsedCreatedAt, 'dd  MMMM  yyyy', {
      locale: ptBR,
    })

    return formattedDate
  } catch (error) {
    console.error('Erro ao formatar a data:', error)
    return 'Data inválida' // ou outra mensagem de erro
  }
}
