import Widget from '@/components/UI/Widget'
import styles from './Metrics.module.scss'
import { Typography } from '@mui/joy'
import formatBytes from '@/utils/formatBytes'
import { useTranslation } from 'next-i18next'

export default function Metrics({ usage, savedData }) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Widget title={t('metrics.title')}>
      <div className={styles.contentWrapper}>
        <article>
          <Typography fontWeight="900" fontSize={46} level="title-lg">
            {formatBytes(savedData)}
          </Typography>
          <Typography fontSize={16} level="body-xs">
            {t('metrics.saved_data')}
          </Typography>
        </article>

        <article>
          <Typography fontWeight="900" fontSize={46} level="title-lg">
            {usage}
          </Typography>
          <Typography fontSize={16} level="body-xs">
            {t('metrics.total_active_images')}
          </Typography>
        </article>
      </div>
    </Widget>
  )
}
