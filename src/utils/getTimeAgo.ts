import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const getTimeAgo = (createdAt: string) => {
  const parsedCreatedAt = parseISO(createdAt)
  const relativeTime = formatDistanceToNow(parsedCreatedAt, {
    locale: ptBR,
    addSuffix: false,
  })
  return `Há ${relativeTime}`
}
