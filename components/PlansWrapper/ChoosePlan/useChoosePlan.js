import projectService from '@/services/project'
import { useMutation } from 'react-query'

const useChoosePlan = () => {
  const { mutate: upgradePlan, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.UPGRADE_PLAN],
    mutationFn: () => projectService.upgradePlan(),
    onSuccess: async (response) => {
      window.location.href = response.data.sessionUrl
    },
  })

  return { upgradePlan, isLoading }
}
export default useChoosePlan
