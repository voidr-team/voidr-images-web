import { useState } from 'react'
import styles from './Header.module.scss'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import cn from 'classnames'
import Image from 'next/image'
import sidebarItems from '@/components/Sidebar/sidebarItems'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../LanguageSwitcher'

export default function Header({ menuList }) {
  const router = useRouter()
  const { t } = useTranslation('common')
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

      <div className={styles.menuActions}>
        <LanguageSwitcher />

        <figure onClick={toggleMenu} className={styles.toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </figure>
      </div>

      <nav className={cn(styles.navbar, { [styles.navbarActive]: isOpen })}>
        <ul>
          {menuList.concat(sidebarItems.common)?.map((menuItem, index) => {
            return (
              <Link key={`${menuItem?.id}_${index}`} href={menuItem?.link}>
                <li
                  className={cn(styles.listItem, {
                    [styles.listItemActive]: router.pathname === menuItem?.link,
                  })}
                >
                  <menuItem.icon />
                  {t(menuItem?.label)}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
