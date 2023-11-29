import { useQuery } from 'react-query'
import imagesService from '@/services/images'

export default function useGetVariationsImage(id) {
  const {
    data,
    isLoading,
    refetch: fetch,
  } = useQuery({
    queryKey: [imagesService.swrKeys.GET_IMAGE_VARIATIONS],
    queryFn: () => imagesService.getImageVariations(id),
    staleTime: 600000,
    enabled: !!id,
    retry: 0,
  })

  return { data: data?.data, isLoading, fetch }
}
