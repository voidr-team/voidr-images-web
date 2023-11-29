import styles from './WaitingData.module.scss'
import Loader from '@/components/UI/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import useAuth from '@/context/auth/useAuth'
import InlineLink from '@/components/UI/InlineLink'
import getDocsUrlByLanguage from '@/utils/i18n/getDocsUrlByLanguage'

export default function WaitingData() {
  const { t, i18n } = useTranslation(['translations', 'common'])
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
          href={getDocsUrlByLanguage(i18n.language)}
          target="_blank"
          rel="noreferrer"
        >
          {t('onboarding.finish.go_docs')}
        </InlineLink>
      </div>
    </div>
  )
}
