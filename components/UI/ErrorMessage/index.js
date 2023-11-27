import { ErrorMessage as ErrorMessagePrimitive } from '@hookform/error-message'
import styles from './ErrorMessage.module.scss'
import { useTranslation } from 'next-i18next'

function ErrorMessage({ name, errors, personalizedMessage }) {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <ErrorMessagePrimitive
      name={name}
      errors={errors}
      render={({ message }) => (
        <p className={styles.errorMessage}>
          {t(message) ?? personalizedMessage}
        </p>
      )}
    />
  )
}

export default ErrorMessage
