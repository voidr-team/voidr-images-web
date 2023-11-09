import { Lightbulb, TrendingUp } from 'lucide-react'
import styles from './Insights.module.scss'
import Widget from '@/components/UI/Widget'
import { useTranslation } from 'next-i18next'

export default function Insights() {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Widget title={t('insights.title')}>
      <article className={styles.helpBox}>
        <div className={styles.iconWrapper}>
          <TrendingUp />
        </div>

        <p>{t('insights.content.1')}</p>
      </article>

      <article className={styles.helpBox}>
        <div className={styles.iconWrapper}>
          <Lightbulb />
        </div>

        <p>{t('insights.content.2')}</p>
      </article>
    </Widget>
  )
}
