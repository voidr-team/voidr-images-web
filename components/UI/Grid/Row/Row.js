import cx from 'classnames'
import styles from '../styles.module.scss'

function Row({ children, className }) {
  return <div className={cx(styles.row, className, 'row')}>{children}</div>
}

export default Row
