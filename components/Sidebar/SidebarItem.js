import cn from 'classnames'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SidebarItem = ({ link, label, Icon }) => {
  const router = useRouter()

  return (
    <Link href={link}>
      <li
        className={cn(styles.listItem, {
          [styles.listItemActive]: router.pathname === link,
        })}
      >
        <Icon />
        {label}
      </li>
    </Link>
  )
}

export default SidebarItem
