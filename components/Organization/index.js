import { Divider, Stack } from '@mui/joy'
import List from './List'
import InviteMember from './InviteMember'
import { useState } from 'react'
import ChangeDomains from './ChangeDomains'
import useProject from '@/hooks/useProject'
import Loader from '../UI/Loader'

//REFACTOR: dividir os componentes internos e montar eles direto na page
function OrganizationList() {
  const [isOpenInviteMember, setIsOpenInviteMember] = useState(false)
  const { data, isLoading } = useProject()

  return (
    <div>
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
    </div>
  )
}

export default OrganizationList
