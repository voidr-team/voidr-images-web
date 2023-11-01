import { Stack } from '@mui/joy'
import List from './List'
import InviteMember from './InviteMember'
import { useState } from 'react'
import ChangeDomains from './ChangeDomains'

function OrganizationList() {
  const [isOpenInviteMember, setIsOpenInviteMember] = useState(false)

  return (
    <Stack minHeight="100vh" width="100%" spacing={2}>
      <ChangeDomains />
      <List setIsOpenInviteMember={setIsOpenInviteMember} />
      <InviteMember
        isOpen={isOpenInviteMember}
        setIsOpen={setIsOpenInviteMember}
      />
    </Stack>
  )
}

export default OrganizationList
