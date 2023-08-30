import cx from 'classnames'
import styles from '../styles.module.scss'

function Row({ children, customClass }) {
  return <div className={cx(styles.row, customClass, 'row')}>{children}</div>
}

export default Row
