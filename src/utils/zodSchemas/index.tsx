import * as zod from 'zod'

export const AnswerFormSchema = zod.object({
  content: zod
    .string()
    .min(20, {
      message: 'Sua resposta é muito curta. Use pelo menos 20 caracteres',
    })
    .max(2500, { message: 'A resposta deve ter no máximo 2500 caracteres' })
    .refine(
      (content) => {
        const words = content.split(/\s+/)
        return !words.some((word) => word.length > 46)
      },
      {
        message: 'Nenhuma palavra deve ter mais de 46 letras.',
        path: ['content'],
      }
    ),
})

export const AnswerFormDesktopSchema = zod.object({
  content: zod
    .string()
    .min(20, 'Sua resposta é muito curta. Use pelo menos 20 caracteres')
    .max(2500, 'A resposta deve ter no máximo 2500 caracteres'),
})

export const CommentFormSchema = zod.object({
  content: zod
    .string()
    .min(2, 'Comentário deve ter entre 2 a 500 caracteres.')
    .max(500, 'Comentário deve ter entre 2 a 500 caracteres.')
    .refine(
      (content) => {
        const words = content.split(/\s+/)
        return !words.some((word) => word.length > 46)
      },
      {
        message: 'Nenhuma palavra deve ter mais de 46 letras.',
        path: ['content'],
      }
    ),
})
