import BaseLayout from '../../layouts/BaseLayout'
import Head from 'next/head'
import LoginWithGoogle from '@/components/UI/LoginWithGoogle'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './Login.module.scss'

function LoginPage() {
  const { t } = useTranslation()
  const { loginWithRedirect } = useAuth0()
  return (
    <>
      <Head>
        <title>Faça Login | voidr</title>
      </Head>
      <BaseLayout currentPage="login">
        <h1>{t('Vamos começar!')}</h1>
        <p>{t('Faça o login abaixo')}</p>
        <button onClick={loginWithRedirect}>Login with redirect</button>
        <LoginWithGoogle customClass={styles.loginButton} />
      </BaseLayout>
    </>
  )
}

export default LoginPage

export const getStaticProps = loadAllTranslations
