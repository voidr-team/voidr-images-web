import imagesService from '@/services/images'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

export default function useFilesList() {
  const router = useRouter()
  const { data, isLoading } = useQuery({
    queryKey: [imagesService.swrKeys.GET_IMAGES, router.query.page],
    queryFn: () => imagesService.getImages(router.query.page ?? 1),
    keepPreviousData: true,
    staleTime: 120000,
  })

  const paginate = (page) => {
    return router.push({
      query: {
        page,
      },
    })
  }

  return { data: data?.data, isLoading, paginate }
}
