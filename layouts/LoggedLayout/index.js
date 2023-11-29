import BaseLayout from '../BaseLayout'
import styles from './LoggedLayout.module.scss'

function LoggedLayout({ children }) {
  return (
    <BaseLayout currentPage={styles.currentPage}>
      <div className={styles.holder}>{children}</div>
    </BaseLayout>
  )
}

export default LoggedLayout
