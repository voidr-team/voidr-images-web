import { helpWrapper } from './Help.module.scss'
import cx from 'classnames'

export default function Help({ message, position = 'bottom' }) {
  return (
    <div className={helpWrapper}>
      <div className="helpIcon">?</div>
      <div
        className={cx('helpMessage', {
          leftPosition: position === 'left',
        })}
      >
        <div className="messageBox">{message}</div>
      </div>
    </div>
  )
}
