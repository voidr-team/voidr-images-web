import { Stack, Typography } from '@mui/joy'
import AddNewFile from './AddNewFile'
import FileList from './FileList'
import ModalDialog from './ModalDialog'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function FilesList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  return (
    <Stack paddingX={3} marginY={4}>
      <Typography
        fontWeight="600"
        level="h4"
        alignContent="center"
        alignItems="center"
        display="flex"
      >
        Files <ChevronRight /> Upload
      </Typography>

      <Stack gap={5}>
        <AddNewFile />
        <FileList
          setIsDialogOpen={setIsDialogOpen}
          setCurrentImage={setCurrentImage}
        />
      </Stack>

      <ModalDialog
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </Stack>
  )
}
