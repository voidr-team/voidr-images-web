import Icon from '@/components/UI/Icon'
import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy'
import useOrganizationMembers from './useOrganizationMembers'
import Loader from '@/components/UI/Loader'
import styles from '../List.module.scss'
import { useTranslation } from 'next-i18next'

function ListMembers() {
  const { data, isLoading, deleteMember } = useOrganizationMembers()
  const { t } = useTranslation(['translations', 'common'])

  if (isLoading)
    return (
      <div className={styles.loaderHolder}>
        <Loader />
      </div>
    )

  return (
    <section className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('members.table.picture')}</th>
            <th>{t('members.table.name')}</th>
            <th>{t('members.table.email')}</th>
            <th>{t('members.table.actions')}</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((member, index) => {
            return (
              <tr key={`${member?.sub}_${index}`}>
                <td>
                  <Avatar
                    src={member.picture}
                    width={30}
                    height={30}
                    alt="User profile pic"
                  />
                </td>
                <td>
                  <span>{member?.name}</span>
                </td>
                <td>
                  <span>{member.email}</span>
                </td>

                <td>
                  <Dropdown>
                    <MenuButton sx={{ padding: 1 }}>
                      <Icon height={20} width={20} id="More_Horizontal" />
                    </MenuButton>
                    <Menu className={styles.menu}>
                      <MenuItem onClick={() => deleteMember(member?.sub)}>
                        <Icon height={20} width={20} id="Remove_Minus_Circle" />
                        <p className={styles.exclude}>
                          {t('members.table.remove_member')}
                        </p>
                      </MenuItem>
                    </Menu>
                  </Dropdown>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default ListMembers
