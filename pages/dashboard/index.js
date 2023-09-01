import { useRouter } from 'next/router'
import Vendors from './vendors'
import { useEffect } from 'react'

function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/dashboard') {
      router.push('/dashboard/vendors')
    }
  }, [router.pathname])

  return <Vendors />
}

export default Dashboard
