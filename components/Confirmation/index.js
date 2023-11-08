import { Box, Divider, Modal, ModalDialog, Typography } from '@mui/joy'
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
          <Typography
            id="alert-dialog-modal-title"
            level="h3"
            textColor="neutral.300"
            startDecorator={
              <Icon
                className={styles.confirmationIcon}
                id="Triangle_Warning"
                width={30}
                height={30}
              />
            }
          >
            {title}
          </Typography>
          <Divider />
          <Typography
            id="alert-dialog-modal-description"
            textColor="text.tertiary"
          >
            {description}
          </Typography>
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
