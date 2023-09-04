import { useQuery } from 'react-query'
import { swrKeys } from '@/services/swrKeys'
import organizationService from '@/services/organization.service'

function useOrganizationMembers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: swrKeys.GET_ORGANIZATION,
    queryFn: () => organizationService.getOrganizationMembers(),
  })

  return { data, isLoading, isError }
}

export default useOrganizationMembers
