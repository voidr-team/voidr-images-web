import Head from 'next/head'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import useLogin from './useLogin'

function LoginPage() {
  const { t } = useLogin()

  return (
    <>
      <Head>
        <title>{t('login')} | Voidr</title>
      </Head>
    </>
  )
}

export default LoginPage

export const getStaticProps = loadAllTranslations
