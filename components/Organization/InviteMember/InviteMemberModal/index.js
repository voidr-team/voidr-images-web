import { Modal, ModalDialog, Stack, Typography } from '@mui/joy'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import styles from './InviteMemberModal.module.scss'
import { useTranslation } from 'next-i18next'

function InviteMemberModal({ children, isOpen, setIsOpen, onClose }) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Modal
      open={isOpen}
      onClose={onClose ? onClose : () => setIsOpen((prevState) => !prevState)}
    >
      <ModalDialog color="primary" size="lg" variant="solid">
        <Stack
          minWidth={550}
          justifyContent="space-between"
          direction="column"
          spacing="20px"
        >
          <Stack
            marginBottom={2}
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Typography level="title-lg">{t('invite_member.title')}</Typography>
            <button
              className={styles.buttonCloseModal}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Icon id="Close_MD" width={25} height={25} />
            </button>
          </Stack>

          <Stack>{children}</Stack>
        </Stack>
      </ModalDialog>
    </Modal>
  )
}

InviteMemberModal.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onClose: PropTypes.func,
}

export default InviteMemberModal
