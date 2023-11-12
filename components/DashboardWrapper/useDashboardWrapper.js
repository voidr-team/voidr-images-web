import useAuth from '@/context/auth/useAuth'
import useDashboard from '@/hooks/useDashboard'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useDashboardWrapper = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const [poolingId, setPoolingId] = useState(null)
  const { user } = useAuth()
  const router = useRouter()

  const { data, isLoading, refetch } = useDashboard()
  const graphData = data?.imagesPerDay?.map(({ count, date }) => ({
    date: date,
    value: count,
  }))

  const hasNoUsage = data?.usage < 1

  const startPooling = () => {
    const intervalId = setInterval(() => {
      refetch()
    }, 60000)
    setPoolingId(intervalId)
  }

  const destroyPooling = () => {
    setPoolingId(null)
    const customEvent = new CustomEvent('images:fetch')
    document.dispatchEvent(customEvent)
    clearInterval(poolingId)
  }

  useEffect(() => {
    if (hasNoUsage) {
      startPooling()
    }
    if (!hasNoUsage && !isLoading && !!data) {
      destroyPooling()
    }
  }, [hasNoUsage])

  const hasUsage = data?.usage > 0

  useEffect(() => {
    if (hasUsage) {
      const track = user?.currentProject?.freePlanExpired
        ? 'freetierLimit'
        : 'activeUser'

      router.replace({
        query: {
          track,
        },
      })
    }
  }, [hasUsage])

  return {
    hasNoUsage,
    graphData,
    isLoading,
    data,
    isDialogOpen,
    currentImage,
    setCurrentImage,
    setIsDialogOpen,
  }
}

export default useDashboardWrapper
