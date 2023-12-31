import { Button } from '@/components/atoms/Button'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { IoMdPersonAdd } from 'react-icons/io'
import * as S from './styles'

interface FollowButtonProps {
  isAlreadyFollowing: boolean
  onClick: () => void
}

export const FollowButton: React.FC<FollowButtonProps> = ({
  isAlreadyFollowing,
  onClick,
}) => {
  return (
    <S.FollowButton
      variant="lg"
      rounding="rounded"
      style={{
        padding: '0.65rem 1.5rem',
        width: '100%',
      }}
      onClick={onClick}
      isAlreadyFollowing={isAlreadyFollowing}
    >
      {isAlreadyFollowing ? (
        <>
          <BsFillPersonCheckFill size={20} style={{ color: '#58cc02' }} />
          Seguindo
        </>
      ) : (
        <>
          <IoMdPersonAdd size={20} />
          Seguir
        </>
      )}
    </S.FollowButton>
  )
}
