import { Stack } from '@mui/joy'
import { useRouter } from 'next/router'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import sidebarItems from './sidebarItems'
import Link from 'next/link'

function Content({ children }) {
  const router = useRouter()

  return (
    <Stack
      minWidth="280px"
      borderRight={1}
      borderColor="neutral.700"
      justifyContent="space-between"
      paddingX={3}
      paddingY={2.5}
    >
      <Stack justifyContent="space-between" height="100%" maxHeight="95vh">
        {children}

        <ul className={styles.listWrapper}>
          {sidebarItems.common.map((item) => (
            <Link href={item.link} key={item.id}>
              <li
                className={cn(styles.listItem, {
                  [styles.listItemActive]: router.pathname === item.link,
                })}
              >
                <item.icon />
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </Stack>
    </Stack>
  )
}

export default Content
