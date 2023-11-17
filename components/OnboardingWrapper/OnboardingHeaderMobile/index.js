import Image from 'next/image'
import styles from './OnboardingHeaderMobile.module.scss'
import { useState } from 'react'
import { LibraryBig, LogOut, Menu, X } from 'lucide-react'
import cn from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function OnboardingHeaderMobile() {
  const { t } = useTranslation(['common'])
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

      <figure onClick={toggleMenu} className={styles.toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </figure>

      <nav className={cn(styles.navbar, { [styles.navbarActive]: isOpen })}>
        <ul>
          <a
            href="https://voidr-images.readme.io/reference/intro"
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