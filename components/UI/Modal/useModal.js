import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return {
    setIsOpen,
    isOpen,
  }
}

export default useModal
