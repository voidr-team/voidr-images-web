import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'

const useLogin = () => {
  const { t } = useTranslation()
  const { loginWithRedirect } = useAuth0()

  function handleInvite() {
    const params = new URL(document.location).searchParams
    const invitation = params.get('invitation')
    const organization = params.get('organization')

    if (invitation && organization) {
      return loginWithRedirect({
        authorizationParams: {
          invitation,
          organization,
        },
      })
    }
  }

  useEffect(() => {
    handleInvite()
  }, [])

  return {
    loginWithRedirect,
    t,
  }
}

export default useLogin
