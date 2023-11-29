import { Tab, TabList, Tabs, TabPanel } from '@mui/joy'
import ListMembers from './ListMembers'
import ListInvites from './ListInvites'
import Button from '@/components/UI/Button'
import { useTranslation } from 'next-i18next'
import styles from './List.module.scss'

function List({ setIsOpenInviteMember }) {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <>
      <article className={styles.tabsHeader}>
        <h4>{t('members.title')}</h4>
        <Button
          onClick={() => setIsOpenInviteMember((prevState) => !prevState)}
        >
          {t('members.invite_member')}
        </Button>
      </article>
      <Tabs
        sx={(theme) => ({
          backgroundColor: theme.vars.palette.primary[500],
        })}
        aria-label="Organization members"
        defaultValue={0}
      >
        <TabList
          sx={(theme) => ({
            gap: 1,
            [`[aria-selected="true"]`]: {
              fontWeight: 600,
              color: theme.colorSchemes.light.palette.helper[500],
              background: 'none !important',
            },
          })}
        >
          <Tab>{t('members.table.member')}</Tab>
          <Tab>{t('members.table.invitation')}</Tab>
        </TabList>

        <TabPanel value={0}>
          <ListMembers />
        </TabPanel>
        <TabPanel value={1}>
          <ListInvites />
        </TabPanel>
      </Tabs>
    </>
  )
}

export default List
