import { type Editor } from '@tiptap/react'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxFontSize,
  RxListBullet,
} from 'react-icons/rx'
import { MdOutlineTextFields } from 'react-icons/md'
import * as S from './styles'

type Props = {
  editor: Editor | null
}

export function Toolbar({ editor }: Props) {
  if (!editor) {
    return null
  }

  return (
    <S.ToolsContainer>
      <S.ToolButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="text-2xl"
      >
        <RxFontBold size={24} />
      </S.ToolButton>
      <S.ToolButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="text-2xl"
      >
        <RxFontItalic size={24} />
      </S.ToolButton>
      <S.ToolButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="text-2xl"
      >
        <RxStrikethrough size={24} />
      </S.ToolButton>
      <S.ToolButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="text-2xl"
      >
        <MdOutlineTextFields size={24} />
      </S.ToolButton>
    </S.ToolsContainer>
  )
}
