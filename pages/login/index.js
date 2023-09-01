import BaseLayout from '../../layouts/BaseLayout'
import Head from 'next/head'
// import LoginWithGoogle from '@/components/UI/LoginWithGoogle'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'
import styles from './Login.module.scss'
import Logo from '@/public/images/logo-small.svg'
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
                textColor="neutral.200"
              >
                Mitigue riscos de fornecedores de tecnologia com IA
              </Typography>

              <Image className={styles.imageLogo} src={Logo} alt="Voidr Logo" />
            </div>
          </Stack>
          <Stack>
            <Typography>{t('pages.login.form.title')}</Typography>
            <Button>Entrar</Button>
          </Stack>
        </Stack>
      </BaseLayout>
    </>
  )
}

export default LoginPage

export const getStaticProps = loadAllTranslations
