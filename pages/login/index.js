import Head from 'next/head'
import loadAllTranslations from '/utils/i18n/loadAllTranslations'
import useLogin from '@/hooks/useLogin'

function LoginPage() {
  useLogin()
  return (
    <>
      <Head>
        <title>Voidr | Login</title>
      </Head>
    </>
  )
}

export default LoginPage

export const getStaticProps = loadAllTranslations
