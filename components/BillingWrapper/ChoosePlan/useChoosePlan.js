import http from '@/services/http'
import projectService from '@/services/project'
import toastEz from '@/utils/toastEz'
import { useState } from 'react'
import { useMutation } from 'react-query'

const useChoosePlan = () => {
  const [getInTouch, setGetInTouch] = useState(false)
  const { mutate: upgradePlan, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.UPGRADE_PLAN],
    mutationFn: () => projectService.upgradePlan(),
    onSuccess: async (response) => {
      window.location.href = response.data.sessionUrl
    },
  })

  const handleEnterpriseContact = async () => {
    if (!getInTouch) {
      await http.post('/projects/plan/enterprise')
      setGetInTouch(true)
      toastEz.success("Thanks for your interest, we'll be in touch soon")
    }
  }

  return { upgradePlan, isLoading, handleEnterpriseContact, getInTouch }
}
export default useChoosePlan
