import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styles from './CopyText.module.scss'
import cx from 'classnames'

const CopyText = ({ text, textToCopy, className, children }) => {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <CopyToClipboard text={textToCopy || text} onCopy={handleCopy}>
      <div className={cx(styles.copyWrapper, className)}>
        <span
          className={cx({
            [styles.textCopied]: true,
            [styles.copied]: copied,
          })}
        >
          Copiado!
        </span>
        {children ? (
          children
        ) : (
          <>
            <span>{text}</span>
          </>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default CopyText
