import { IProfileData, IUserInfo } from '@/shared/types'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import Link from 'next/link'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { SiCrystal } from 'react-icons/si'
import { Tooltip } from '@/components/molecules/Tooltip'
import * as Dialog from '@radix-ui/react-dialog'
import { FollowButton } from '@/components/molecules/FollowButton'
import { LoginModal } from '@/components/modals/LoginModal'
import { useAuthModalStore } from '@/features/stores/modals-stores/authModal/authModal'
import { useEffect, useState } from 'react'
import handleFollowUser from '@/utils/handle/handleFollowUser'
import { MdEmojiFlags, MdQuestionAnswer } from 'react-icons/md'
import { Button } from '@/components/atoms/Button'
import { PiMedalFill } from 'react-icons/pi'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
import { getDayOfYear } from '@/utils/getDayOfYear'
import api from '@/services/api'
import Image from 'next/image'
import xpIcon from '@/assets/icons/xp.svg'

interface UserInfoProps {
  data: IUserInfo
}

export function UserInfo({ data }: UserInfoProps) {
  const { isLoggedIn, token } = useAuthStore()
  const authenticatedUser = useAuthStore((state) => state.user)
  const { isOpening, setIsOpening } = useAuthModalStore()
  const [isAlreadyFollowing, setIsAlreadyFollowing] = useState(false)

  const isCurrentUserProfile = authenticatedUser?.id === data.userData.id
  const rank = data.userData.rank

  useEffect(() => {
    const fetchFollowData = async () => {
      try {
        if (data.userData && data.userData.id) {
          const res = await api.get(`follow-status/${data.userData.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (res.status === 200) {
            const data = res.data
            setIsAlreadyFollowing(data.isFollowing === true)
          } else {
            console.log(res.status)
          }

          if (res.status === 400) {
            const data = res.data
            setIsAlreadyFollowing(data.isFollowing === true)
          }
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }
    fetchFollowData()
  }, [data.userData.id, token])

  const handleFollow = () => {
    handleFollowUser(data, isAlreadyFollowing, token, setIsAlreadyFollowing)
  }

  return (
    <>
      <S.UserInfo>
        <S.AvatarContainer>
          <S.UserAvatarPhoto
            id={data.userData.id}
            variant="xl"
            imageUrl={
              data.userData.avatar_url ? data.userData.avatar_url : null
            }
          />

          {isLoggedIn && isCurrentUserProfile && (
            <Link
              href={`/profile/${data.userData.id}/edit`}
              style={{ textDecoration: 'none' }}
            >
              <S.EditButtonMobile
                variant="lg"
                rounding="rounded"
                color="white"
                backgroundColor="blue_500"
                style={{
                  padding: '0.65rem 1.5rem',
                }}
              >
                Editar
              </S.EditButtonMobile>
            </Link>
          )}
        </S.AvatarContainer>
        <div>
          <Text
            size="xx1"
            weight="semibold"
            color="blue_950"
            style={{
              fontFamily: 'Poppins',
              marginTop: '1.25rem',
            }}
          >
            {data.userData.name}
          </Text>

          <Text
            size="md"
            weight="regular"
            color="gray_400"
            style={{
              fontFamily: 'Poppins',
              marginTop: '0.25rem',
            }}
          >
            {/* <span
                  style={{
                    color: '#2089EA',
                    fontWeight: 'bold',
                    userSelect: 'none',
                  }}
                >
                  @
                </span>{' '} */}
            {data.userData.username}
          </Text>
        </div>

        <S.FriendsQuantity>
          {/* <IoMdPeople size={24} style={{ color: 'rgba(51, 51, 51, 1)' }} /> */}
          <Text size="md" color="black">
            <strong style={{ fontWeight: '900', color: 'black' }}>0</strong>{' '}
            Seguidores{' '}
          </Text>
          <Text size="md" color="black">
            <strong style={{ fontWeight: '900', color: 'black' }}>0</strong>{' '}
            Segue{' '}
          </Text>
        </S.FriendsQuantity>

        <S.UserBadges>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={xpIcon} height={24} alt="" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '0.25rem',
              }}
            >
              {/* <IoMdArrowDropup size={20} /> */}
              <S.StarQuantity>
                <Text
                  weight="extrabold"
                  size="lg"
                  color="blue_950"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {data.userData.points ?? 0}
                </Text>{' '}
                <Text
                  weight="bold"
                  size="sm"
                  color="blue_950"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  xp
                </Text>{' '}
              </S.StarQuantity>
            </div>
          </div>
          <S.VerticalDivider>|</S.VerticalDivider>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {data.userData.role === 'ADMIN' && (
              <Tooltip content="Administrador">
                <S.UserRankContainer color="#45A6FF">
                  <Text size="sm" color="white" weight="bold">
                    {data.userData.role}
                  </Text>
                </S.UserRankContainer>
              </Tooltip>
            )}
            {data.userData.role !== 'ADMIN' && (
              <Tooltip content={rank?.description}>
                <S.UserRankContainer color={rank.color}>
                  <Text size="sm" color="black">
                    {rank.name}
                  </Text>
                </S.UserRankContainer>
              </Tooltip>
            )}
          </div>
        </S.UserBadges>

        {!isCurrentUserProfile && (
          <div
            style={{
              marginTop: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              gap: '1rem',
            }}
          >
            {!token || !isLoggedIn ? (
              <>
                {' '}
                <Dialog.Root open={isOpening} onOpenChange={setIsOpening}>
                  <Dialog.Trigger asChild>
                    <FollowButton
                      isAlreadyFollowing={isAlreadyFollowing}
                      onClick={handleFollow}
                    />
                  </Dialog.Trigger>
                  <LoginModal />
                </Dialog.Root>
              </>
            ) : (
              <FollowButton
                isAlreadyFollowing={isAlreadyFollowing}
                onClick={handleFollow}
              />
            )}

            <Tooltip content="Denunciar">
              <Button
                variant="lg"
                rounding="rounded"
                color="white"
                backgroundColor="white"
                style={{
                  padding: '0.65rem 1.5rem',
                  // width: '20%',
                }}
              >
                <MdEmojiFlags size={24} style={{ color: '#b0b0b0' }} />
              </Button>
            </Tooltip>
          </div>
        )}

        <S.UserDetailsBox>
          <S.AnswersQuantity>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem',
              }}
            >
              <MdQuestionAnswer size={16} color="#2089EA" />
              <Text weight="bold" color="blue_950">
                {data.answersData?.answers?.length ?? 0}
              </Text>
            </div>

            <Text size="xs" color="blue_950">
              Respostas
            </Text>
          </S.AnswersQuantity>
          <S.AnswersQuantity>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem',
              }}
            >
              <PiMedalFill size={16} color="#EBA900" />
              <Text weight="bold" color="blue_950">
                0
              </Text>
            </div>
            <Text size="xs" color="blue_950">
              Melhores
            </Text>
          </S.AnswersQuantity>
          <S.AnswersQuantity>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.25rem',
              }}
            >
              <S.hearthIconCSS></S.hearthIconCSS>
              <Text weight="bold" color="blue_950">
                0
              </Text>
            </div>
            <Text size="xs" color="blue_950">
              Valeus
            </Text>
          </S.AnswersQuantity>
        </S.UserDetailsBox>

        <S.UserEditing>
          {isLoggedIn && isCurrentUserProfile && (
            <Link href={`/profile/${data.userData.id}/edit`}>
              <S.EditButton
                variant="lg"
                rounding="rounded"
                color="white"
                backgroundColor="blue_500"
                style={{
                  padding: '0.65rem 1.5rem',
                }}
              >
                Editar
              </S.EditButton>
            </Link>
          )}

          <S.SeenIn>
            <S.ActiveIn>
              <BiTimeFive size={18} />
              <S.ActiveAtContainer>
                <Text size="xs">Ativo pela última vez </Text>
                <Text weight="semibold" size="xs">
                  há 2 dias
                </Text>
              </S.ActiveAtContainer>
            </S.ActiveIn>
            <S.CreatedAt>
              <AiOutlineCalendar size={18} />
              <Text size="xs">Por aqui desde </Text>
              <Text weight="semibold" size="xs">
                {getDayOfYear(data.userData.createdAt)}
              </Text>
            </S.CreatedAt>
          </S.SeenIn>
        </S.UserEditing>
      </S.UserInfo>
    </>
  )
}
