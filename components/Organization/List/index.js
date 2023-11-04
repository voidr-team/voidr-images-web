import {
  Tab,
  TabList,
  Tabs,
  TabPanel,
  Stack,
  Typography,
  tabClasses,
} from '@mui/joy'
import ListMembers from './ListMembers'
import ListInvites from './ListInvites'
import Button from '@/components/UI/Button'

function List({ setIsOpenInviteMember }) {
  return (
    <Stack bgcolor="transparent" padding="35px">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginY={2}
      >
        <Typography level="h3">Members</Typography>
        <Button
          onClick={() => setIsOpenInviteMember((prevState) => !prevState)}
        >
          Invite member
        </Button>
      </Stack>
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
