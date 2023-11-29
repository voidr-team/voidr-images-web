import Widget from '@/components/UI/Widget'
import styles from './Metrics.module.scss'
import formatBytes from '@/utils/formatBytes'
import { useTranslation } from 'next-i18next'

export default function Metrics({ usage, savedData }) {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <Widget title={t('metrics.title')}>
      <div className={styles.contentWrapper}>
        <article>
          <p className={styles.title}>{formatBytes(savedData)}</p>
          <span>{t('metrics.saved_data')}</span>
        </article>

        <article>
          <p className={styles.title}>{usage}</p>
          <span>{t('metrics.total_active_images')}</span>
        </article>
      </div>
    </Widget>
  )
}
