import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { IComment } from '@/shared/types'

export function CommentBox({
  id,
  answer_id,
  author_id,
  content,
  createdAt,
  question_id,
  avatar_url,
}: IComment) {
  return (
    <S.CommentContainer>
      <Avatar
        variant="sm"
        imageUrl={avatar_url ? avatar_url : null}
        id={author_id}
      />
      <div>
        <Text size="sm">{content}</Text>
      </div>
    </S.CommentContainer>
  )
}
