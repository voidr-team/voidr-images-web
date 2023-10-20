import { Tab, TabList, Tabs, TabPanel, Stack } from '@mui/joy'
import ListMembers from './ListMembers'
import ListInvites from './ListInvites'

function List() {
  return (
    <Stack padding="35px">
      <Tabs aria-label="Organization members" defaultValue={0}>
        <TabList
          sx={(theme) => ({
            gap: 1,
            [`[aria-selected="true"]`]: {
              bgcolor: 'transparent',
              fontWeight: 600,
              color: theme.colorSchemes.light.palette.helper[500],
            },
          })}
        >
          <Tab>Membros</Tab>
          <Tab>Convites</Tab>
        </TabList>

        <TabPanel value={0}>
          <ListMembers />
        </TabPanel>
        <TabPanel value={1}>
          <ListInvites />
        </TabPanel>
      </Tabs>
    </Stack>
  )
}

export default List
