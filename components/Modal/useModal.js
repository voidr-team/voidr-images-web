import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onCloseModal = () => {
    setIsOpen(false)
  }

  const onOpenModal = () => {
    setIsOpen(true)
  }

  return {
    setIsOpen,
    isOpen,
    onCloseModal,
    onOpenModal,
  }
}

export default useModal
