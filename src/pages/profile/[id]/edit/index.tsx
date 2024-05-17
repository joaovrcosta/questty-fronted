import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { FloatingButton } from '@/components/molecules/FloatingButton'
import * as S from '@/styles/pages/profile/edit'
import Cookies from 'js-cookie'
import api from '@/services/api'
import { useRouter } from 'next/router'
import { IProfileData } from '@/shared/types'
import { Input } from '@/components/atoms/Input'
import { GetServerSideProps } from 'next'
import useAuthStore from '@/features/stores/auth/useAuthStore'

export default function EditProfile() {
  const router = useRouter()
  const { user } = useAuthStore()

  const goBack = () => {
    router.back()
  }

  const userData = user

  return (
    <>
      <S.EditProfileContainer>
        <S.ProfileEditHeading>
          <Heading color="black" weight="bold">
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
                id={userData?.id}
                variant="xl"
                imageUrl={userData?.avatar_url ? userData.avatar_url : null}
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params as { id: string }

  const tokenJwt = ctx.req.cookies['questty-token']

  if (tokenJwt) {
    try {
      const userResponse = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${tokenJwt}`,
        },
      })

      if (userResponse.status === 200) {
        const user = userResponse.data

        if (id !== user.user.id) {
          return {
            redirect: {
              destination: `/`,
              permanent: false,
            },
          }
        }
      }
    } catch (error) {
      console.error('Error fetching user information:', error)
    }

    return { props: { token: tokenJwt, id } }
  } else {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }
}
