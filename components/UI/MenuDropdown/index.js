import { useState, useRef } from 'react'
import cx from 'classnames'
import styles from './MenuDropdown.module.scss'

function MenuDropdown({ children, menuBody, customClass }) {
  const [isMenuActive, setIsMenuActive] = useState(null)
  const menuRef = useRef()

  return (
    <div
      className={cx(styles.container, customClass)}
      onClick={() => setIsMenuActive((prevState) => !prevState)}
    >
      {children(isMenuActive)}
      <div
        ref={menuRef}
        className={cx({
          [styles.menu]: true,
          [styles.hidden]: isMenuActive !== null && !isMenuActive,
          [styles.visible]: isMenuActive !== null && isMenuActive,
        })}
      >
        {menuBody}
      </div>
    </div>
  )
}

export default MenuDropdown
