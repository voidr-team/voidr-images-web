import { Stack, Typography } from '@mui/joy'
import styles from './WaitingData.module.scss'
import Loader from '@/components/UI/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import ExternalLink from '@/components/UI/ExternalLink'
import useAuth from '@/context/auth/useAuth'
import InlineLink from '@/components/UI/InlineLink'

export default function WaitingData() {
  const { t } = useTranslation(['translations', 'common'])
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    router.replace({
      query: {
        track: 'awaitData',
      },
    })
    return
  }, [])

  return (
    <Stack className={styles.awaitDataWrapper}>
      <div className={styles.imageBackground}></div>

      <Stack
        bgcolor="primary.400"
        border={1}
        borderColor="neutral.600"
        borderRadius={10}
        padding={4}
        className={styles.modalContainer}
      >
        <Typography fontWeight="600" fontSize={20}>
          {t('onboarding.finish.title')}
        </Typography>
        <Typography marginY={2} fontWeight="500" fontSize={16}>
          {t('onboarding.finish.no_data')}
        </Typography>
        <Typography textColor="neutral.400" fontWeight="400" fontSize={16}>
          {t('onboarding.finish.description', {
            project: user?.currentProject?.name,
          })}
        </Typography>

        <Stack marginY={4}>
          <Loader />
        </Stack>

        <InlineLink
          href="https://voidr-images.readme.io/reference/intro"
          target="_blank"
          rel="noreferrer"
        >
          Ir para documentação
        </InlineLink>
      </Stack>
    </Stack>
  )
}
