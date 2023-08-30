import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { confirmable, createConfirmation } from 'react-confirm'
import styles from './Confirmation.module.scss'
import Icon from '@/components/Icon'

const Confirmation = ({
  okLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  title = 'Confirmation',
  icon = 'check',
  confirmation,
  show,
  proceed,
}) => {
  return (
    <Modal
      animation={false}
      isOpen={show}
      onCloseModal={() => proceed(false)}
      skipPortal
      customClassDialog={styles.confirmation}
    >
      <div className={styles.head}>
        <Icon id={icon} />
        <h1>{title}</h1>
      </div>
      <div className={styles.body}>
        <p>{confirmation}</p>
        <div className={styles.actions}>
          <Button inverted onClick={() => proceed(false)}>
            {cancelLabel}
          </Button>
          <Button onClick={() => proceed(true)}>{okLabel}</Button>
        </div>
      </div>
    </Modal>
  )
}

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  icon: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
}

export function confirm({
  confirmation,
  title,
  icon,
  proceedLabel,
  cancelLabel,
  options = {},
}) {
  return createConfirmation(confirmable(Confirmation))({
    title,
    confirmation,
    icon,
    proceedLabel,
    cancelLabel,
    ...options,
  })
}
