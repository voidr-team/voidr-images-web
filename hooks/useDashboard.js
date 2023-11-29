import dashboardService from '@/services/dashboard'
import { useQuery } from 'react-query'

export default function useDashboard() {
  const {
    data: response,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [dashboardService.swrKeys.GET_DASHBOARD],
    queryFn: () => dashboardService.getDashboard(),
  })

  return { data: response?.data, isLoading, refetch }
}
