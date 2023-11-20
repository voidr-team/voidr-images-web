import { Box, Divider, Modal, ModalDialog } from '@mui/joy'
import Icon from '@/components/UI/Icon'
import { confirmable, createConfirmation } from 'react-confirm'
import Button from '../UI/Button'
import styles from './Confirmation.module.scss'

function Confirmation({
  show,
  proceed,
  okLabel = 'Confirm',
  cancelLabel = 'Cancel',
  title = 'Confirmation',
  description = 'Are you sure?',
}) {
  return (
    <>
      <Modal open={show} onClose={() => proceed(false)}>
        <ModalDialog
          variant="outlined"
          role="alertdialog"
          aria-labelledby="alert-dialog-modal-title"
          aria-describedby="alert-dialog-modal-description"
        >
          <header className={styles.headerModal}>
            <Icon
              className={styles.confirmationIcon}
              id="Triangle_Warning"
              width={30}
              height={30}
            />

            <h5>{title}</h5>
          </header>

          <Divider />

          <p style={{ marginBlock: '15px' }}>{description}</p>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'flex-start',
              pt: 2,
            }}
          >
            <Button onClick={() => proceed(true)}>{okLabel}</Button>
            <Button inverted onClick={() => proceed(false)}>
              {cancelLabel}
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  )
}

export function confirm({
  title,
  description,
  okLabel,
  cancelLabel,
  options = {},
}) {
  return createConfirmation(confirmable(Confirmation))({
    title,
    description,
    okLabel,
    cancelLabel,
    ...options,
  })
}
