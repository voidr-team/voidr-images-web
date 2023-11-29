import Image from 'next/image'
import styles from './OnboardingHeaderMobile.module.scss'
import { useState } from 'react'
import { LibraryBig, LogOut, Menu, X } from 'lucide-react'
import cn from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import getDocsUrlByLanguage from '@/utils/i18n/getDocsUrlByLanguage'

export default function OnboardingHeaderMobile() {
  const { t, i18n } = useTranslation(['common'])
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prevState) => !prevState)

  return (
    <header className={styles.header}>
      <Image
        src="/images/logo-small.svg"
        alt="Logo Voidr"
        width={30}
        height={30}
      />

      <div>
        <div className={styles.languageSwitcherWrapper}>
          <LanguageSwitcher />
        </div>

        <figure onClick={toggleMenu} className={styles.toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </figure>
      </div>

      <nav className={cn(styles.navbar, { [styles.navbarActive]: isOpen })}>
        <ul>
          <a
            href={getDocsUrlByLanguage(i18n.language)}
            target="_blank"
            rel="noreferrer"
          >
            <li className={styles.listItem}>
              <LibraryBig />
              {t('common:docs')}
            </li>
          </a>

          <Link href="/logout">
            <li className={cn(styles.listItem)}>
              <LogOut />
              {t('common:log_out')}
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
