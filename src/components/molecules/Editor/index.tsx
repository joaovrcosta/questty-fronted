import styled from 'styled-components'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { Toolbar } from './Toolbar'
import { useEffect } from 'react'

const StyledEditorContainer = styled.div`
  position: relative;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: auto;
  height: 534px; /* Ajuste a altura conforme necessário */

  /* Estilizando a barra de rolagem */
  ::-webkit-scrollbar {
    width: 4px; /* largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* cor de fundo da trilha da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* cor do polegar da barra de rolagem */
    border-radius: 8px; /* borda arredondada do polegar */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* cor do polegar da barra de rolagem ao passar o mouse */
  }
`

const StyledEditorContent = styled.div`
  outline: none;
  font-family: 'ProximaNova', sans-serif;
  font-size: 18px;
  min-height: 465px;

  @media (max-width: 1180px) {
    padding: 5px;
    min-height: 250px;
  }
`

const StyledToolbarContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1; /* Garante que a barra de ferramentas fique acima do conteúdo */
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
          'outline: none; font-family: ProximaNova; font-size: 18px; padding: 0.5rem; padding-bottom: 1rem; min-height: 200px; line-height: 1.5rem',
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
      <StyledToolbarContainer>
        <Toolbar editor={editor} />
      </StyledToolbarContainer>
    </StyledEditorContainer>
  )
}
