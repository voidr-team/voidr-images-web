import { Stack } from '@mui/joy'
import OrganizationHeader from './OrganizationHeader'
import List from './List'
import InviteMember from './InviteMember'
import { useState } from 'react'

function OrganizationList() {
  const [isOpenInviteMember, setIsOpenInviteMember] = useState(false)

  return (
    <Stack minHeight="100vh" width="100%" spacing={2}>
      <OrganizationHeader setIsOpenInviteMember={setIsOpenInviteMember} />
      <List />
      <InviteMember
        isOpen={isOpenInviteMember}
        setIsOpen={setIsOpenInviteMember}
      />
    </Stack>
  )
}

export default OrganizationList
