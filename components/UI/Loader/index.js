import { loaderWrapper, isLight } from './Loader.module.scss'
import cx from 'classnames'

export default function Loader({ light, className }) {
  return (
    <div className={cx('loader', className)}>
      <div
        className={cx(loaderWrapper, className, {
          [isLight]: light,
        })}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
