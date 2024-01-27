import * as S from './styles'
import { Text } from '@/components/atoms/Text'
import { FileUploader } from 'react-drag-drop-files'
import { MdUpload } from 'react-icons/md'

interface UploadBoxProps {
  fileTypes?: string[]
  label?: string
  hoverLabel?: string
  //   handleChange: (files: FileList) => void
}

export function UploadBox({
  fileTypes = ['JPG', 'JPEG', 'PNG', 'PDF'],
  hoverLabel = 'Arraste aqui',
  label,
}: //   handleChange,
UploadBoxProps) {
  return (
    <FileUploader
      styles={{
        maxWidth: '100%',
      }}
      label={label}
      hover={hoverLabel}
      multiple
      //   handleChange={handleChange}
      types={fileTypes}
    >
      <S.DropArea>
        <MdUpload size={28} />
        <Text size="sm" color="primary" weight="medium">
          {label}
        </Text>
      </S.DropArea>
    </FileUploader>
  )
}
