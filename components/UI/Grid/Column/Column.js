import cx from 'classnames'
import styles from '../styles.module.scss'

function Column({
  children,
  size = 12,
  sizeMobile = 12,
  sizeTablet = 12,
  customClass,
}) {
  return (
    <div
      className={cx(
        styles.col,
        styles[`size${size}`],
        customClass,
        styles[`size-mobile${sizeMobile}`],
        styles[`size-tablet${sizeTablet}`],
        'column'
      )}
    >
      {children}
    </div>
  )
}

export default Column
