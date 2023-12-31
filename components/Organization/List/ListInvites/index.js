import { Dropdown, ListDivider, Menu, MenuButton, MenuItem } from '@mui/joy'
import useOrganizationInvites from './useOrganizationInvites'
import Loader from '@/components/UI/Loader'
import Icon from '@/components/UI/Icon'
import CopyClipboard from '@/components/CopyClipboard'
import EmptyState from '@/components/UI/EmptyState'
import formatDateLocal from '@/utils/formatDateLocal'
import { useTranslation } from 'next-i18next'
import styles from '../List.module.scss'

function ListInvites() {
  const { data, isLoading, cancelInvite } = useOrganizationInvites()
  const { t } = useTranslation(['translations', 'common'])

  if (isLoading) {
    return (
      <div className={styles.loaderHolder}>
        <Loader />
      </div>
    )
  }

  return (
    <>
      {data?.data.length > 0 ? (
        <section className={styles.wrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t('inviations.table.email')}</th>
                <th>{t('inviations.table.status')}</th>
                <th>{t('inviations.table.created_at')}</th>
                <th>{t('inviations.table.expires_at')}</th>
                <th>{t('inviations.table.created_by')}</th>
                <th>{t('inviations.table.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((invite) => (
                <tr key={invite.id}>
                  <td>{invite.invitee.email}</td>
                  <td>{t('common:pending')}</td>
                  <td>{formatDateLocal(invite.created_at)}</td>
                  <td>{formatDateLocal(invite.expires_at)}</td>
                  <td>{invite.inviter.name}</td>
                  <td>
                    <Dropdown>
                      <MenuButton sx={{ padding: 1 }}>
                        <Icon height={20} width={20} id="More_Horizontal" />
                      </MenuButton>
                      <Menu className={styles.menu}>
                        <CopyClipboard text={invite.invitationUrl}>
                          <MenuItem>
                            <p>{t('inviations.table.copy_invite')}</p>
                          </MenuItem>
                        </CopyClipboard>

                        <ListDivider />

                        <MenuItem onClick={() => cancelInvite(invite.id)}>
                          <Icon
                            height={20}
                            width={20}
                            id="Remove_Minus_Circle"
                          />
                          <p className={styles.exclude}>
                            {t('inviations.table.remove_invite')}
                          </p>
                        </MenuItem>
                      </Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <EmptyState content={t('inviations.table.empty_state')} />
      )}
    </>
  )
}

export default ListInvites
