import { formatDistanceToNow, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

export const getTimeAgo = (createdAt: string) => {
  const parsedCreatedAt = parseISO(createdAt)
  const relativeTime = formatDistanceToNow(parsedCreatedAt, {
    locale: pt,
    addSuffix: false,
  })
  return `Há ${relativeTime}`
}
