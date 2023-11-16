import { ErrorMessage as ErrorMessagePrimitive } from '@hookform/error-message'
import styles from './ErrorMessage.module.scss'

function ErrorMessage({ name, errors, personalizedMessage }) {
  return (
    <ErrorMessagePrimitive
      name={name}
      errors={errors}
      render={({ message }) => (
        <p className={styles.errorMessage}>{message ?? personalizedMessage}</p>
      )}
    />
  )
}

export default ErrorMessage
