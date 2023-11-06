import { Stack } from '@mui/joy'
import List from './List'
import InviteMember from './InviteMember'
import { useState } from 'react'
import ChangeDomains from './ChangeDomains'
import useProject from '@/hooks/useProject'
import Loader from '../UI/Loader'

function OrganizationList() {
  const [isOpenInviteMember, setIsOpenInviteMember] = useState(false)
  const { data, isLoading } = useProject()

  return (
    <Stack minHeight="100vh" width="100%" spacing={2}>
      {isLoading ? (
        <Stack padding="35px">
          <Loader />
        </Stack>
      ) : (
        <ChangeDomains domains={data?.domains} />
      )}
      <List setIsOpenInviteMember={setIsOpenInviteMember} />
      <InviteMember
        isOpen={isOpenInviteMember}
        setIsOpen={setIsOpenInviteMember}
      />
    </Stack>
  )
}

export default OrganizationList
