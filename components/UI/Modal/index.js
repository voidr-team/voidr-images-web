import { ModalDialog, Modal as ModalProvider } from '@mui/joy'

const Modal = ({ children, setIsOpen, open }) => {
  return (
    <ModalProvider open={open} onClose={() => setIsOpen(false)}>
      <ModalDialog
        variant="solid"
        color="primary"
        role="alertdialog"
        size="lg"
        aria-labelledby="alert-dialog-modal-title"
        aria-describedby="alert-dialog-modal-description"
      >
        {children}
      </ModalDialog>
    </ModalProvider>
  )
}

export default Modal
