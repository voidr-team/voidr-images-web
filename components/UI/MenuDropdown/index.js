import { useState, useEffect, useRef } from 'react'
import cx from 'classnames'
import styles from './MenuDropdown.module.scss'

function MenuDropdown({ children, menuBody, customClass }) {
  const [isMenuActive, setIsMenuActive] = useState(null)
  const menuRef = useRef()

  useEffect(() => {
    function clickEvent() {
      if (isMenuActive) setIsMenuActive(false)
    }

    document.addEventListener('click', clickEvent)

    return () => document.removeEventListener('click', clickEvent)
  }, [isMenuActive])

  return (
    <div
      className={cx(styles.container, customClass)}
      onClick={() => !isMenuActive && setIsMenuActive(true)}
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
