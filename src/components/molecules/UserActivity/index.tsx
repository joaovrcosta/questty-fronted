import React from 'react'
import * as S from './styles'
import Link from 'next/link'
import { Text } from '@/components/atoms/Text'

interface UserActivityTabsProps {
  userId: string | undefined
  isActive: string
  setActive: (tabName: string) => void
}

export function UserActivityTabs({
  userId,
  isActive,
  setActive,
}: UserActivityTabsProps) {
  const handleTabClick = (tabName: any) => {
    setActive(tabName)
  }

  return (
    <>
      <S.UserActivityContainer>
        <nav>
          <S.Item>
            <Link
              href={`/profile/${userId}/answers`}
              style={{ textDecoration: 'none' }}
            >
              <Text
                weight="semibold"
                color={isActive === 'answers' ? 'blue_500' : 'gray_500'}
                onClick={() => handleTabClick('answers')}
              >
                Respostas
              </Text>
            </Link>
          </S.Item>
          <S.Item>
            <Link
              href={`/profile/${userId}/questions`}
              style={{ textDecoration: 'none' }}
            >
              <Text
                weight="semibold"
                color={isActive === 'questions' ? 'blue_500' : 'gray_500'}
                onClick={() => handleTabClick('questions')}
              >
                Perguntas
              </Text>
            </Link>
          </S.Item>
          <S.Item>
            <Link
              href={`/profile/${userId}/achievements`}
              style={{ textDecoration: 'none' }}
            >
              <Text
                weight="semibold"
                color={isActive === 'achievements' ? 'blue_500' : 'gray_500'}
                onClick={() => handleTabClick('achievements')}
              >
                Emblemas
              </Text>
            </Link>
          </S.Item>
          <S.Item>
            <Link
              href={`/profile/${userId}/followers`}
              style={{ textDecoration: 'none' }}
            >
              <Text
                weight="semibold"
                color={isActive === 'followers' ? 'blue_500' : 'gray_500'}
                onClick={() => handleTabClick('followers')}
              >
                Seguidores
              </Text>
            </Link>
          </S.Item>
          <S.Item>
            <Link
              href={`/profile/${userId}/following`}
              style={{ textDecoration: 'none' }}
            >
              <Text
                weight="semibold"
                color={isActive === 'following' ? 'blue_500' : 'gray_500'}
                onClick={() => handleTabClick('following')}
              >
                Seguindo
              </Text>
            </Link>
          </S.Item>
        </nav>
      </S.UserActivityContainer>
    </>
  )
}
