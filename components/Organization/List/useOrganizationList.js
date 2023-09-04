import { useQuery } from 'react-query'
import { swrKeys } from '@/services/swrKeys'
import organizationService from '@/services/organization.service'

function useOrganizationList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: swrKeys.GET_ORGANIZATION,
    queryFn: () => organizationService.getOrganizations(),
  })

  return { data, isLoading, isError }
}

export default useOrganizationList
