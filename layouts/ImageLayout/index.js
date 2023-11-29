import Sidebar from '@/components/Sidebar'
import sidebarStyles from '@/components/Sidebar/Sidebar.module.scss'
import sidebarItems from '@/components/Sidebar/sidebarItems'
import BaseLayout from '../BaseLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import useAuth from '@/context/auth/useAuth'
import styles from './ImageLayout.module.scss'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import Header from '../../components/Header'
import { LibraryBig } from 'lucide-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import getDocsUrlByLanguage from '@/utils/i18n/getDocsUrlByLanguage'

function ImageLayout({ children, title }) {
  const router = useRouter()
  const { user } = useAuth()
  const { t, i18n } = useTranslation(['translations', 'common'])

  return (
    <BaseLayout currentPage="dashboard">
      <Head>
        <title>Voidr | {title}</title>
      </Head>
      <Header menuList={sidebarItems.images} />

      <div className={styles.imageLayoutRoot}>
        <Sidebar.Root>
          <Sidebar.Content>
            <div>
              <div className={styles.logoTypo}>
                <img src="/images/logo-typo.svg" alt="voidr logo typo" />
              </div>

              <p className={styles.projectNameTitle}>
                {user?.currentProject?.name}
              </p>

              <ul className={sidebarStyles.listWrapper}>
                {sidebarItems.images.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <li
                      className={cn(sidebarStyles.listItem, {
                        [sidebarStyles.listItemActive]:
                          router.pathname === item.link,
                      })}
                    >
                      <item.icon />
                      {t(item.label)}
                    </li>
                  </Link>
                ))}
                <a
                  href={getDocsUrlByLanguage(i18n.language)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li className={sidebarStyles.listItem}>
                    <LibraryBig />
                    {t('common:docs')}
                  </li>
                </a>
              </ul>
            </div>
          </Sidebar.Content>
        </Sidebar.Root>

        <div className={styles.imageLayoutScrollable}>
          <LanguageSwitcher />
          <div className={styles.languageSwitcherWrapper}></div>
          <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default ImageLayout
