import styles from './Content.module.scss'
import sidebarItems from '../sidebarItems'
import SidebarItem from '../SidebarItem'
import { useTranslation } from 'next-i18next'

function Content({ children }) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <aside className={styles.sidebarContent}>
      <div>
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
      </div>
    </aside>
  )
}

export default Content
