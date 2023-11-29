import { Modal, ModalDialog } from '@mui/joy'
import PropTypes from 'prop-types'

import styles from './InviteMemberModal.module.scss'
import { useTranslation } from 'next-i18next'
import Icon from '@/components/UI/Icon'

function InviteMemberModal({ children, isOpen, setIsOpen, onClose }) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Modal
      open={isOpen}
      onClose={onClose ? onClose : () => setIsOpen((prevState) => !prevState)}
    >
      <ModalDialog color="primary" size="lg" variant="solid">
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <p>{t('invite_member.title')}</p>
            <button
              className={styles.buttonCloseModal}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <Icon id="Close_MD" width={25} height={25} />
            </button>
          </div>

          <div>{children}</div>
        </div>
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
