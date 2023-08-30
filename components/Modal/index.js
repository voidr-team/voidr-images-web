import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles, {
  modalWrapper,
  modalOverlay,
  modalDialog,
  closeButton,
} from './Modal.module.scss'
import cx from 'classnames'

const modalRoot = process.browser
  ? document.getElementById('modal-wrapper')
  : null

function Modal({
  isOpen = true,
  children,
  onCloseModal,
  mode = 'standard',
  skipPortal = false,
  customClassDialog,
}) {
  const wrapper = process.browser ? document.createElement('div') : null
  const hasOverlay = mode === 'standard'
  useEffect(() => {
    modalRoot.appendChild(wrapper)
    if (isOpen) {
      document.body.style = 'overflow: hidden!important;'
    }

    return () => {
      document.body.style = 'overflow: auto!important;'
      modalRoot.removeChild(wrapper)
    }
  }, [wrapper])

  const Portal = (
    <div className={cx(modalWrapper, styles[mode])}>
      {hasOverlay && (
        <div className={modalOverlay} onClick={onCloseModal}></div>
      )}

      <div className={cx(modalDialog, customClassDialog)}>
        <>
          <button onClick={onCloseModal} className={closeButton}>
            Fechar
          </button>
          {children}
        </>
      </div>
    </div>
  )

  return isOpen && wrapper
    ? skipPortal
      ? Portal
      : createPortal(Portal, wrapper)
    : null
}

export default Modal
