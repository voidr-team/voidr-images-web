import { Stack } from '@mui/joy'
import AddNewFile from './AddNewFile'
import FileList from './FileList'
import ModalFileImage from '../ModalFileImage'
import { useState } from 'react'

export default function FilesList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  return (
    <div>
      <Stack gap={5}>
        <AddNewFile />
        <FileList
          setIsDialogOpen={setIsDialogOpen}
          setCurrentImage={setCurrentImage}
        />
      </Stack>

      <ModalFileImage
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </div>
  )
}
