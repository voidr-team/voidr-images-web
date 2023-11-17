import { useState } from 'react'
import AddNewFile from './AddNewFile'
import FileList from './FileList'
import ModalFileImage from '../ModalFileImage'
import styles from './Files.module.scss'

export default function FilesList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  return (
    <>
      <div className={styles.container}>
        <AddNewFile />
        <FileList
          setIsDialogOpen={setIsDialogOpen}
          setCurrentImage={setCurrentImage}
        />
      </div>

      <ModalFileImage
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
      />
    </>
  )
}
