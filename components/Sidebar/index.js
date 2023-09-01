import { Stack } from '@mui/joy'
import styles from './Sidebar.module.scss'
import CardUser from './CardUser'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Image from 'next/image'

const sidebarItems = [
  {
    id: 1,
    label: 'Assessments',
    redirect: '/dashboard/assessments',
  },
  {
    id: 2,
    label: 'Vendors',
    redirect: '/dashboard/vendors',
  },
  {
    id: 3,
    label: 'Supply Score',
    redirect: '/dashboard/supply-score',
  },
]

function Sidebar() {
  const router = useRouter()

  return (
    <Stack
      height="100vh"
      bgcolor="primary.600"
      minWidth="280px"
      alignItems="center"
      justifyContent="space-between"
      paddingY="40px"
      className={styles.sidebar}
    >
      <Stack width="100%" alignItems="center" direction="column" spacing={5}>
        <Image
          src="/images/logo-with-name.svg"
          alt="Oi"
          width={140}
          height={70}
        />
        <ul className={styles.listWrapper}>
          {sidebarItems.map((item) => (
            <Link href={item.redirect} key={item.id}>
              <p
                className={cn(styles.listItem, {
                  [styles.listItemActive]: router.pathname === item.redirect,
                })}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </ul>
      </Stack>

      <Stack paddingX="20px">
        <CardUser />
      </Stack>
    </Stack>
  )
}

export default Sidebar
