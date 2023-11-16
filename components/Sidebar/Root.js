import { Stack } from '@mui/joy'
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
      <Stack
        minHeight="100vh"
        paddingX={'14px'}
        paddingY={'20px'}
        borderRight={1}
        alignItems="center"
        justifyContent="space-between"
        borderColor="var(--neutral-700)"
      >
        <Stack maxHeight="100vh">
          <Image
            src="/images/logo-small.svg"
            alt="Logo voidr"
            width={45}
            height={45}
          />

          <Stack paddingTop={3} alignItems="center">
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
          </Stack>
        </Stack>
        <div className={styles.chevron}>
          <ChevronsRight />
        </div>
      </Stack>
      <div className={styles.sidebarContent}>{children}</div>
    </div>
  )
}

export default Root
