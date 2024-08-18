import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { AiFillFlag, AiOutlineFlag } from 'react-icons/ai'
import * as Dialog from '@radix-ui/react-dialog'
import { Tooltip } from '@/components/molecules/Tooltip'
import { ReportCommentModal } from '@/components/modals/ReportCommentModal'
import { useState } from 'react'
import { useReportCommentStore } from '@/features/stores/modals-stores/reportCommentModal'
import useAuthStore from '@/features/stores/auth/useAuthStore'
import { IComment } from '@/shared/types'

interface ICommentBoxProps {
  comment: IComment
  isReported: boolean
}

export function CommentBox({ comment, isReported }: ICommentBoxProps) {
  const { isOpening, setIsOpening, comments } = useReportCommentStore()
  const { user } = useAuthStore()
  const [currentEntityId, setCurrentEntityId] = useState<string | null>(null)

  const isAuthor = comment.author_id === user?.id
  const isCommentReported = comments.includes(comment.id)

  const handleReportClick = () => {
    setCurrentEntityId(comment.id)
    setIsOpening(true)
  }

  return (
    <S.CommentContainer>
      <S.CommentInfo>
        <div>
          <Avatar
            variant="sm"
            imageUrl={
              comment.author?.avatar_url ? comment.author?.avatar_url : null
            }
            id={comment.author_id}
          />
        </div>
        <div>
          <Text
            size="sm"
            style={{
              fontFamily: 'Nunito',
              lineHeight: '20px',
              fontSize: '15px',
            }}
          >
            {comment.content}
          </Text>
        </div>
      </S.CommentInfo>
      <S.ModerateContainer>
        {!isAuthor && (
          <div>
            {isReported || isCommentReported ? (
              <Tooltip content="Em moderação">
                <S.ReportedButton
                  onClick={handleReportClick}
                  style={{ color: '#D20032' }}
                >
                  <AiFillFlag size={24} color="#D20032" />
                </S.ReportedButton>
              </Tooltip>
            ) : (
              <Tooltip content="Denunciar">
                <Dialog.Root
                  open={currentEntityId === comment.id && isOpening}
                  onOpenChange={setIsOpening}
                >
                  <Dialog.Trigger asChild>
                    <button onClick={handleReportClick}>
                      <AiOutlineFlag size={24} />
                    </button>
                  </Dialog.Trigger>
                  <ReportCommentModal
                    entityType="COMMENT"
                    entityId={comment.id}
                  />
                </Dialog.Root>
              </Tooltip>
            )}
          </div>
        )}
      </S.ModerateContainer>
    </S.CommentContainer>
  )
}
