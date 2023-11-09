import projectService from '@/services/project'

const useSubscription = () => {
  const onClickViewSubscription = async () => {
    const response = await projectService.getSubscriptionUrl()
    const url = response?.data?.url
    window.open(url)
  }

  return {
    onClickViewSubscription,
  }
}
export default useSubscription
