import LoadingPage from '@/components/LoadingPage'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

export default function Referral() {
  const { loginWithRedirect } = useAuth0()

  const signInWithReferral = () => {
    const params = new URL(document.location).searchParams
    const slug = params.get('slug')

    sessionStorage.setItem('voidr_referral_slug', slug)
    return loginWithRedirect()
  }

  useEffect(() => {
    signInWithReferral()
  }, [])

  return <LoadingPage />
}
