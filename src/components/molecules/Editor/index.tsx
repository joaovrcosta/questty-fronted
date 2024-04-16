import styled from 'styled-components'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { Toolbar } from './Toolbar'
import { useEffect } from 'react'

const StyledEditorContainer = styled.div`
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`

const StyledEditorContent = styled.div`
  outline: none;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  min-height: 355px;

  @media (max-width: 1180px) {
    padding: 5px;
    min-height: 250px;
  }
`

interface EditorProps {
  onChange?: (content: string) => void
}

export function Editor({ onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'styled-editor-content', 
        style:
          'outline: none; font-family: Nunito; font-size: 18px; padding: 0.5rem; min-height: 200px;',
      },
    },
  })

  useEffect(() => {
    const handleContentChange = () => {
      if (editor) {
        onChange && onChange(editor.getHTML())
      }
    }

    // Adiciona um ouvinte para o evento 'update'
    editor?.on('update', handleContentChange)

    // Remove o ouvinte quando o componente for desmontado
    return () => {
      editor?.off('update', handleContentChange)
    }
  }, [editor, onChange])

  return (
    <StyledEditorContainer>
      <StyledEditorContent>
        <EditorContent editor={editor} />
      </StyledEditorContent>
      <Toolbar editor={editor} />
    </StyledEditorContainer>
  )
}
