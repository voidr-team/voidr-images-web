import { Box, Divider, Modal, ModalDialog, Typography } from '@mui/joy'
import Icon from '@/components/UI/Icon'
import { confirmable, createConfirmation } from 'react-confirm'
import Button from '../UI/Button'

function Confirmation({
  show,
  proceed,
  okLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
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
            startDecorator={
              <Icon id="Triangle_Warning" width={30} height={30} />
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
            sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}
          >
            <Button inverted onClick={() => proceed(false)}>
              {cancelLabel}
            </Button>
            <Button onClick={() => proceed(true)}>{okLabel}</Button>
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
