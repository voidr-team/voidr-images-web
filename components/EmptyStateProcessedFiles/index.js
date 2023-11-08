import Loader from '@/components/UI/Loader'
import styles from './EmptyStateProcessedFiles.module.scss'

export default function EmptyStateProcessedFiles() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p>Awaiting for images to be processed</p>
        <Loader />
      </div>
    </div>
  )
}
