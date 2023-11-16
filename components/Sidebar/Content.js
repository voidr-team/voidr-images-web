import { Stack } from '@mui/joy'
import styles from './Sidebar.module.scss'
import sidebarItems from './sidebarItems'
import SidebarItem from './SidebarItem'
import { useTranslation } from 'next-i18next'

function Content({ children }) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Stack
      minWidth="220px"
      height="100%"
      borderRight={1}
      borderColor="#1d232d"
      justifyContent="space-between"
      paddingX={'20px'}
      paddingY={2.5}
    >
      <Stack justifyContent="space-between" height="100%" maxHeight="95vh">
        {children}

        <ul className={styles.listWrapper}>
          {sidebarItems.common.map((item) => (
            <SidebarItem
              link={item.link}
              key={item.id}
              Icon={item.icon}
              label={t(item.label)}
            />
          ))}
        </ul>
      </Stack>
    </Stack>
  )
}

export default Content
