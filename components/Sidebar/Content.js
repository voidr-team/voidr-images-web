import { Stack } from '@mui/joy'
import { useRouter } from 'next/router'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import Icon from '../UI/Icon'
import sidebarItems from './sidebarItems'
import Link from 'next/link'

function Content({ children }) {
  const router = useRouter()

  return (
    <Stack
      borderRight={1}
      borderColor="neutral.600"
      justifyContent="space-between"
      paddingX={3}
      paddingY={2.5}
    >
      {children}

      <ul className={styles.listWrapper}>
        {sidebarItems.common.map((item) => (
          <Link href={item.link} key={item.id}>
            <li
              className={cn(styles.listItem, {
                [styles.listItemActive]: router.pathname === item.link,
              })}
            >
              <Icon id="Image_Icon" width={17} height={17} />
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </Stack>
  )
}

export default Content
