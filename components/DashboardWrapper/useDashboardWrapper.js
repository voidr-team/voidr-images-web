import useAuth from '@/context/auth/useAuth'
import useDashboard from '@/hooks/useDashboard'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useDashboardWrapper = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const { user } = useAuth()
  const router = useRouter()

  const { data, isLoading } = useDashboard()
  const graphData = data?.imagesPerDay?.map(({ count, date }) => ({
    date: date,
    value: count,
  }))

  const hasNoUsage = data?.usage < 1

  useEffect(() => {
    if (hasNoUsage && !isLoading) {
      router.push('/onboarding?step=1')
    }
  }, [hasNoUsage])

  const hasUsage = data?.usage > 0

  useEffect(() => {
    if (hasUsage && !isLoading) {
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
