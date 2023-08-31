import BaseLayout from '../../layouts/BaseLayout'
import Head from 'next/head'
// import LoginWithGoogle from '@/components/UI/LoginWithGoogle'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'
// import { useAuth0 } from '@auth0/auth0-react'
import styles from './Login.module.scss'
import Logo from '@/public/images/logo.svg'
import Image from 'next/image'

import { Stack, Typography, Button } from '@mui/joy'

function LoginPage() {
  const { t } = useTranslation()
  // const { loginWithRedirect } = useAuth0()

  return (
    <>
      <Head>
        <title>Faça Login | Voidr</title>
      </Head>

      <BaseLayout currentPage="login">
        <Stack
          padding="10px"
          width="100vw"
          height="100vh"
          direction="row"
          spacing="10px"
        >
          <Stack width="40%">
            <div className={styles.wrapper}>
              <Typography
                level="h1"
                fontWeight="sm"
                fontFamily="Space Grotesk"
                fontSize="48px"
              >
                {t('pages.login.helper.title')}
              </Typography>

              <Image className={styles.imageLogo} src={Logo} alt="Voidr Logo" />
            </div>
          </Stack>
          <Stack>
            <Typography>{t('pages.login.form.title')}</Typography>
            <Button>Teste</Button>
          </Stack>
        </Stack>
      </BaseLayout>
    </>
  )
}

export default LoginPage

export const getStaticProps = loadAllTranslations
