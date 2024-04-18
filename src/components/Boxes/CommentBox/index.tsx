import { Avatar } from '@/components/atoms/Avatar'
import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { IComment } from '@/shared/types'
import { AiOutlineFlag } from 'react-icons/ai'
import * as Dialog from '@radix-ui/react-dialog'
import { Tooltip } from '@/components/molecules/Tooltip'
import { useReportQuestionStore } from '@/features/stores/modals-stores/reportQuestionModal/userReportQuestionModal'
import { ReportCommentModal } from '@/components/modals/ReportCommentModal'
import { useState } from 'react'

export function CommentBox({ id, author_id, content, avatar_url }: IComment) {
  const { isOpening, setIsOpening } = useReportQuestionStore()
  const [currentEntityId, setCurrentEntityId] = useState<string | null>(null)

  const handleReportClick = () => {
    setCurrentEntityId(id)
    setIsOpening(true)
  }

  const handleCloseModal = () => {
    setCurrentEntityId(null)
    setIsOpening(false)
  }

  return (
    <S.CommentContainer>
      <S.CommentInfo>
        <Avatar
          variant="sm"
          imageUrl={avatar_url ? avatar_url : null}
          id={author_id}
        />
        <div>
          <Text size="sm">{content}</Text>
        </div>
      </S.CommentInfo>
      <S.ModerateContainer>
        <Tooltip content="Denunciar">
          <Dialog.Root
            open={currentEntityId === id && isOpening}
            onOpenChange={setIsOpening}
          >
            <Dialog.Trigger asChild>
              <button onClick={handleReportClick}>
                <AiOutlineFlag size={24} />
              </button>
            </Dialog.Trigger>
            <ReportCommentModal
              entityType="COMMENT"
              entityId={id}
              handleCloseModal={handleCloseModal}
            />
          </Dialog.Root>
        </Tooltip>
      </S.ModerateContainer>
    </S.CommentContainer>
  )
}
