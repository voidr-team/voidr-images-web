import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'

const useLogin = () => {
  const { t, i18n } = useTranslation()
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
          ui_locales: i18n?.language || 'en',
        },
      })
    }

    return loginWithRedirect()
  }

  useEffect(() => {
    handleInvite()
  }, [])

  return {
    t,
  }
}

export default useLogin
