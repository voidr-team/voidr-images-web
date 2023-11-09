import { useState } from 'react'
import styles from './CopyURL.module.scss'
import { Check } from 'lucide-react'
import { useTranslation } from 'next-i18next'

export default function CopyURL({ url }) {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation(['translations', 'common'])

  const handleCopy = async () => {
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)

    return await window.navigator.clipboard.writeText(url)
  }

  return (
    <div className={styles.wrapper}>
      <p>{t('common:url')}</p>
      <input type="text" value={url} readOnly />
      <button onClick={handleCopy}>
        {copied ? <Check /> : t('common:copy')}
      </button>
    </div>
  )
}
