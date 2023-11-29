import imagesService from '@/services/images'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useQuery } from 'react-query'

export default function useFilesList({ limit = 10 }) {
  const router = useRouter()
  const { data, isLoading, refetch } = useQuery({
    queryKey: [imagesService.swrKeys.GET_IMAGES, router.query.page, limit],
    queryFn: () => imagesService.getImages(router.query.page || 1, limit),
    keepPreviousData: true,
    staleTime: 120000,
  })

  const handleImageFetch = useCallback(() => {
    refetch()
  })

  useEffect(() => {
    document.addEventListener('images:fetch', handleImageFetch)

    return () => {
      document.removeEventListener('images:fetch', handleImageFetch)
    }
  })

  const paginate = (page) => {
    return router.push({
      query: {
        page,
      },
    })
  }

  const page = router.query?.page

  return { data: data?.data, isLoading, paginate, page }
}
