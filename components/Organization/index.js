import List from './List'
import InviteMember from './InviteMember'
import { useState } from 'react'
import ChangeDomains from './ChangeDomains'
import useProject from '@/hooks/useProject'
import Loader from '../UI/Loader'
import styles from './Organization.module.scss'

//REFACTOR: dividir os componentes internos e montar eles direto na page
function OrganizationList() {
  const [isOpenInviteMember, setIsOpenInviteMember] = useState(false)
  const { data, isLoading } = useProject()

  return (
    <div>
      {isLoading ? (
        <div className={styles.loadingHolder}>
          <Loader />
        </div>
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
