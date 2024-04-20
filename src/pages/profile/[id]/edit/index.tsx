import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import * as S from '@/styles/pages/profile/edit'
import Cookies from 'js-cookie'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { IProfileData } from '@/shared/types'
import { Input } from '@/components/atoms/Input'

export default function EditProfile(props: IProfileData) {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  const userData = props.userData

  return (
    <>
      <S.EditProfileContainer>
        <S.ProfileEditHeading>
          <Heading color="blue_550" weight="bold">
            Editar Perfil
          </Heading>
          <Button
            onClick={goBack}
            backgroundColor="transparent"
            rounding="rounded-thin"
            border={false}
          >
            Cancelar
          </Button>
        </S.ProfileEditHeading>
        <S.EditProfileBox>
          <S.BoxHeading>
            <Heading color="black" size="sm">
              Detalhes do Perfil
            </Heading>
          </S.BoxHeading>
          <S.UserInfo>
            <S.UserInfoFirst>
              <S.UserAvatarPhoto
                id={props.userData.id}
                variant="xl"
                imageUrl={
                  props.userData.avatar_url ? props.userData.avatar_url : null
                }
              />
              <S.FirstBoxInputs>
                <Input
                  variant="lg"
                  border={true}
                  showLabel={true}
                  label="Username *"
                  hug={true}
                  value={userData?.username}
                />
                <Input
                  variant="lg"
                  border={true}
                  showLabel={true}
                  label="Nome *"
                  hug={true}
                  value={userData?.name}
                />
              </S.FirstBoxInputs>
            </S.UserInfoFirst>
            <S.InputRest>
              <Input
                variant="lg"
                border={true}
                showLabel={true}
                label="Bio"
                hug={true}
              />
              <Input
                variant="lg"
                border={true}
                showLabel={true}
                label="Localização"
                hug={true}
              />
              <Input
                variant="lg"
                border={true}
                showLabel={true}
                label="Senha"
                hug={true}
              />
              <Input
                variant="lg"
                border={true}
                showLabel={true}
                label="E-mail"
                hug={true}
                value={userData?.email}
              />
              <Input
                variant="lg"
                border={true}
                showLabel={true}
                label="Url do Avatar"
                hug={true}
                value={userData?.avatar_url}
              />
              <S.SubmitButtonContainer>
                <Button
                  rounding="rounded-xxl"
                  backgroundColor="blue_550"
                  color="white"
                  type="submit"
                  variant="lg"
                  hug={true}
                >
                  Salvar
                </Button>
              </S.SubmitButtonContainer>
            </S.InputRest>
          </S.UserInfo>
        </S.EditProfileBox>
      </S.EditProfileContainer>
      <FloatingButton />
    </>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const { id } = ctx.params as { id: string }

  const existingToken = Cookies.get('questty-token')

  if (existingToken) {
    return { props: { token: existingToken, id } }
  }

  try {
    const res = await api.get(`profile/${id}`)

    const userData = res.data.user

    return { props: { userData, id } }
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return { props: { userData: null } }
  }
}
