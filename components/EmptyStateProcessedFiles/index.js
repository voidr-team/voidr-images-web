import Loader from '@/components/UI/Loader'
import styles from './EmptyStateProcessedFiles.module.scss'
import { useTranslation } from 'next-i18next'

export default function EmptyStateProcessedFiles() {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p>{t('file_list.empty_state')}</p>
        <Loader />
      </div>
    </div>
  )
}
