import api from '@/services/api'

export async function getUserFromToken(token: string) {
  try {
    const userResponse = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const user = userResponse.data.user

    return user
  } catch (error) {
    console.error('Erro ao obter usuário:', error)
    throw error
  }
}
