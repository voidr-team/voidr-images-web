import styles from './WaitingData.module.scss'
import Loader from '@/components/UI/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
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
    <div className={styles.awaitDataWrapper}>
      <div className={styles.imageBackground}></div>

      <div className={styles.modalContainer}>
        <h3 fontWeight="600" fontSize={20}>
          {t('onboarding.finish.title')}
        </h3>
        <p>{t('onboarding.finish.no_data')}</p>
        <span>
          {t('onboarding.finish.description', {
            project: user?.currentProject?.name,
          })}
        </span>

        <div className={styles.loaderWrapper}>
          <Loader />
        </div>

        <InlineLink
          href="https://voidr-images.readme.io/reference/intro"
          target="_blank"
          rel="noreferrer"
        >
          Ir para documentação
        </InlineLink>
      </div>
    </div>
  )
}
