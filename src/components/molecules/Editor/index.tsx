import { useEditor, EditorContent, EditorEvents } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { Toolbar } from './Toolbar'
import { useEffect } from 'react'

interface EditorProps {
  onChange?: (content: string) => void
}

export function Editor({ onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
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
    <>
      <EditorContent editor={editor} />
      <Toolbar editor={editor} />
    </>
  )
}
