import { useAuth0 } from '@auth0/auth0-react'
import styles from './LoginWithGoogle.module.scss'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'

const LoginWithGoogle = ({ customClass }) => {
  const { loginWithRedirect } = useAuth0()

  const { t } = useTranslation('ui')

  const handleLogin = () => {
    loginWithRedirect({
      connection: 'google-oauth2',
    })
  }

  return (
    <button
      className={cx(styles.googleLoginButton, customClass)}
      onClick={handleLogin}
    >
      <img src="/images/google-logo.svg" alt="Google logo" />
      <span>{t('LoginWithGoogle.button')}</span>
    </button>
  )
}

export default LoginWithGoogle
