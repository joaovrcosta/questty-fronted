import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { Tooltip } from '@/components/molecules/Tooltip'
import { SiCrystal } from 'react-icons/si'
import { AiFillHeart } from 'react-icons/ai'
import { FaCrown } from 'react-icons/fa6'
import { MdArrowForwardIos } from 'react-icons/md'

import { SkeletonCircle, SkeletonLine } from '@/components/atoms/Skeleton'
import useAuthStore from '@/features/stores/auth/useAuthStore'

export const GameBoxFacade = () => {
  const { user } = useAuthStore()
  const isLoading = !user

  return (
    <>
      <S.ProfileInfoSidebar>
        <S.RankingBox>
          <S.ProfileSiderbarHeading>
            <S.UserAvatarWrapper>
              {isLoading ? (
                <div style={{ borderRadius: '50%' }}>
                  <SkeletonCircle rows={1} size={56} />
                </div>
              ) : (
                <Avatar
                  id={user?.id}
                  variant="lg"
                  imageUrl={user?.avatar_url ? user?.avatar_url : null}
                />
              )}
            </S.UserAvatarWrapper>

            <S.SubInfo>
              {isLoading ? (
                <>
                  <SkeletonLine rows={1} height={10} width={60} />
                </>
              ) : (
                <S.UsernameLinkContainer
                  href={`/profile/${user?.id}/answers`}
                  passHref
                >
                  <S.Nickname weight="semibold" color="blue_950">
                    {user?.username}
                  </S.Nickname>
                </S.UsernameLinkContainer>
              )}
              {isLoading ? (
                <>
                  <SkeletonLine rows={1} height={10} width={60} />
                </>
              ) : (
                <Text size="sm">#{Number(user?.code)}</Text>
              )}
            </S.SubInfo>
          </S.ProfileSiderbarHeading>
          {isLoading ? (
            <>
              <SkeletonLine rows={2} height={6} width={60} />
            </>
          ) : (
            <S.PointsContainer>
              <Tooltip content="Cristais">
                <S.QuestionPoints>
                  <S.StarContainer>
                    <SiCrystal size={16} color="#1cb0f6" />
                  </S.StarContainer>
                  <S.StarQuantity>
                    <Text
                      weight="semibold"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      0
                    </Text>{' '}
                  </S.StarQuantity>
                </S.QuestionPoints>
              </Tooltip>
              <Tooltip content="Cristais">
                <S.QuestionPoints>
                  <S.StarContainer>
                    <AiFillHeart size={16} color="#ff341a" />
                  </S.StarContainer>
                  <S.StarQuantity>
                    <Text
                      weight="semibold"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      0
                    </Text>{' '}
                  </S.StarQuantity>
                </S.QuestionPoints>
              </Tooltip>
              <Tooltip content="Cristais">
                <S.QuestionPoints>
                  <S.StarContainer>
                    <FaCrown size={16} color="#c98600" />
                  </S.StarContainer>
                  <S.StarQuantity>
                    <Text
                      weight="semibold"
                      color="blue_950"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      0
                    </Text>{' '}
                  </S.StarQuantity>
                </S.QuestionPoints>
              </Tooltip>
            </S.PointsContainer>
          )}
          <S.MoreConfigurations>
            <S.MoreConfigurationsButton>
              <Text
                weight="semibold"
                size="sm"
                color="blue_950"
                style={{ whiteSpace: 'nowrap' }}
              >
                Respostas verificadas
              </Text>
              <MdArrowForwardIos size={24} color="#45A6FF" />
            </S.MoreConfigurationsButton>
            <S.MoreConfigurationsButton>
              <Text
                weight="semibold"
                color="blue_950"
                size="sm"
                style={{ whiteSpace: 'nowrap' }}
              >
                Meus emblemas
              </Text>
              <MdArrowForwardIos size={24} color="#45A6FF" />
            </S.MoreConfigurationsButton>
            <S.MoreConfigurationsButton>
              <Text
                weight="semibold"
                color="blue_950"
                style={{ whiteSpace: 'nowrap' }}
                size="sm"
              >
                Configurações da conta
              </Text>
              <MdArrowForwardIos size={24} color="#45A6FF" />
            </S.MoreConfigurationsButton>
          </S.MoreConfigurations>
        </S.RankingBox>
      </S.ProfileInfoSidebar>
    </>
  )
}
