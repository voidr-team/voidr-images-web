import { Stack } from '@mui/joy'
import OrganizationHeader from './OrganizationHeader'
import List from './List'

function OrganizationList() {
  return (
    <Stack width="100%" spacing={2}>
      <OrganizationHeader />
      <List />
    </Stack>
  )
}

export default OrganizationList
