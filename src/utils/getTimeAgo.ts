import { formatDistanceToNow, parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function getTimeAgo(createdAt?: string) {
  if (!createdAt) {
    return 'Data inválida' // ou alguma mensagem padrão
  }

  try {
    const parsedCreatedAt = parseISO(createdAt)
    const relativeTime = formatDistanceToNow(parsedCreatedAt, {
      locale: ptBR,
      addSuffix: false,
    })

    return relativeTime
  } catch (error) {
    console.error('Erro ao formatar a data:', error)
    return 'Data inválida' // ou outra mensagem de erro
  }
}

export function getFormattedDateAndTime(createdAt?: string) {
  if (!createdAt) {
    return 'Data inválida'
  }

  try {
    const parsedDate = parseISO(createdAt)

    // Formata a data como "20 de setembro"
    const formattedDate = format(parsedDate, 'dd MMMM', { locale: ptBR })

    // Formata a hora como "às 00:00"
    const formattedTime = format(parsedDate, "'às' HH:mm")

    return `${formattedDate} ${formattedTime}`
  } catch (error) {
    console.error('Erro ao formatar a data:', error)
    return 'Data inválida' // ou outra mensagem de erro
  }
}
