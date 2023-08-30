import { loaderWrapper, isLight } from './Loader.module.scss'
import cx from 'classnames'

export default function Loader({ light, customClass }) {
  return (
    <div className={cx('loader', customClass)}>
      <div
        className={cx(loaderWrapper, customClass, {
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
