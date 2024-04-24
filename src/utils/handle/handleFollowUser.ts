import api from '@/services/api'
import { IProfileData } from '@/shared/types'

const handleFollowUser = async (
  props: IProfileData,
  isAlreadyFollowing: boolean,
  token: string | null,
  setIsAlreadyFollowing: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await api.request({
      url: `follow/${props.userData.id}`,
      method: isAlreadyFollowing ? 'DELETE' : 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(res)

    if (res.status === 204) {
      setIsAlreadyFollowing(false)
    } else if (res.status === 201) {
      setIsAlreadyFollowing(true)
    } else if (res.status === 400) {
    } else {
      console.log(`Código de status inesperado: ${res.status}`)
    }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
  }
}

export default handleFollowUser
