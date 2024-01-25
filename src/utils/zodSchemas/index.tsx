import * as zod from 'zod'

export const AnswerFormSchema = zod.object({
  content: zod
    .string()
    .min(20, 'Mas já?! Escreva no mínimo 20 caracteres para explicar melhor.')
    .max(2500, 'A resposta deve ter no máximo 2500 caracteres')
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
