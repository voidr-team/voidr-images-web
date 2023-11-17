import Head from 'next/head'
import loadAllTranslations from '/utils/i18n/loadAllTranslations'

function LoginPage() {
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
