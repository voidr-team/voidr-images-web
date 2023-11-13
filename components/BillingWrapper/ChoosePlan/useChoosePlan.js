import http from '@/services/http'
import projectService from '@/services/project'
import toastEz from '@/utils/toastEz'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import useModal from '@/components/UI/Modal/useModal'

const useChoosePlan = () => {
  const { t } = useTranslation(['translations', 'common'])
  const [getInTouch, setGetInTouch] = useState(false)
  const { isOpen, setIsOpen } = useModal()

  const handleEnterpriseContact = async () => {
    if (!getInTouch) {
      await http.post('/projects/plan/enterprise')
      setGetInTouch(true)
      toastEz.success(t('choose_plan.toast.enterprise'))
    }
  }

  const upgradePlan = () => {
    setIsOpen(true)
  }
  return {
    upgradePlan,
    handleEnterpriseContact,
    getInTouch,
    isOpen,
    setIsOpen,
  }
}
export default useChoosePlan
