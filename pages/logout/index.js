import { useEffect } from 'react'
import LoadingPage from '@/components/LoadingPage'
import { useAuth0 } from '@auth0/auth0-react'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'

export default function Logout() {
  const { logout } = useAuth0()
  useEffect(() => {
    logout()
    localStorage.clear()
    sessionStorage.clear()
    setTimeout(() => location.reload(), 1000)
  }, [])

  return <LoadingPage />
}

export const getStaticProps = loadAllTranslations
