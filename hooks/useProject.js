import projectService from '@/services/project'
import { useQuery } from 'react-query'

export default function useProject() {
  const { data: response, isLoading } = useQuery({
    queryKey: [projectService.swrKeys.GET_PROJECT],
    queryFn: () => projectService.getProject(),
  })

  return { data: response?.data, isLoading }
}
