import { Stack } from '@mui/joy'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Image from 'next/image'
import Icon from '../UI/Icon'

function Root({ children }) {
  const router = useRouter()

  return (
    <Stack
      position="fixed"
      zIndex={999}
      display="flex"
      direction="row"
      className={styles.sidebar}
      minHeight="100vh"
      bgcolor="primary.500"
    >
      <Stack
        minHeight="100vh"
        paddingX={1.2}
        paddingY={2.5}
        borderRight={1}
        alignItems="center"
        borderColor="neutral.700"
      >
        <Stack maxHeight="100vh">
          <Image
            src="/images/logo-small.svg"
            alt="Logo voidr"
            width={37}
            height={37}
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
      </Stack>

      {children}
    </Stack>
  )
}

export default Root
