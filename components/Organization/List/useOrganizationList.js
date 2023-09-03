const { default: swr_keys } = require('@/constants/swr_keys')
const { useQuery } = require('react-query')
import organizationService from '@/services/organization.service'

function useOrganizationList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: swr_keys.get_data,
    queryFn: () => organizationService.getOrganizations(),
  })

  return { data, isLoading, isError }
}

export default useOrganizationList
