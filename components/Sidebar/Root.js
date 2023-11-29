import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Image from 'next/image'
import Icon from '../UI/Icon'
import { ChevronsRight } from 'lucide-react'

function Root({ children }) {
  const router = useRouter()

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHolder}>
        <figure>
          <Image
            src="/images/logo-small.svg"
            alt="Logo voidr"
            width={45}
            height={45}
          />

          <figure className={styles.productsNavigationWrapper}>
            <Link href="/images/dashboard">
              <Icon
                className={cn(styles.iconNavigationItem, {
                  [styles.iconNavigationItemActive]:
                    router.pathname.startsWith('/images'),
                })}
                id="Image_Icon"
                width={45}
                height={45}
              />
            </Link>
          </figure>
        </figure>

        <div className={styles.chevron}>
          <ChevronsRight />
        </div>
      </div>
      <div className={styles.sidebarContent}>{children}</div>
    </div>
  )
}

export default Root
