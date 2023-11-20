import styles from './PlanInfo.module.scss'
import useAuth from '@/context/auth/useAuth'
import { useTranslation } from 'next-i18next'

function ProgressPlan({ level }) {
  const width = level > 100 ? '100' : level
  return (
    <div className={styles.planInfo}>
      <div className={styles.bar} style={{ width: `${width}%` }} />
    </div>
  )
}

export default function PlanInfo({ usage = 0 }) {
  const { t } = useTranslation(['translations', 'common'])
  const { user } = useAuth()
  const isProPlan = user?.currentProject?.plan === 'PRO'
  const freeUsage = user?.currentProject?.usageLimit || 1000
  const totalImages = isProPlan ? 100000 : freeUsage

  return (
    <article className={styles.planInfoContainer}>
      <p className={styles.dataUsage}>
        {usage}

        <span>{t('plan_info.total_images')}</span>
      </p>

      <ProgressPlan level={(usage / totalImages) * 100} />

      <article className={styles.planUsageInfoContainer}>
        <div className={styles.planUseInfo}>
          <div
            className={styles.smallBadge}
            style={{ backgroundColor: 'var(--helper-600)' }}
          />

          <article className={styles.content}>
            <span>{t('plan_info.processed')}</span>

            <p>
              {usage} {t('common:images')}
            </p>
          </article>
        </div>

        <div className={styles.planUseInfo}>
          <div
            className={styles.smallBadge}
            style={{ backgroundColor: 'var(--primary-300)' }}
          />

          <article className={styles.content}>
            <span>{t('plan_info.left')}</span>

            <p>
              {totalImages - usage} {t('common:images')}
            </p>
          </article>
        </div>
      </article>
    </article>
  )
}
