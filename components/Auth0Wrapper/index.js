import { Auth0Provider } from '@auth0/auth0-react'

const NEXT_PUBLIC_AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN
const NEXT_PUBLIC_AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_AUTH_CLIENT_ID
const NEXT_PUBLIC_AUTH_AUDIENCE = process.env.NEXT_PUBLIC_AUTH_AUDIENCE

const Auth0Wrapper = ({ children }) => {
  if (typeof window === 'undefined') {
    return children
  }

  const redirectUri =
    typeof window !== 'undefined' ? window?.location?.origin : ''

  return (
    <Auth0Provider
      domain={NEXT_PUBLIC_AUTH_DOMAIN}
      clientId={NEXT_PUBLIC_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: NEXT_PUBLIC_AUTH_AUDIENCE,
      }}
      useRefreshTokens={false}
      useRefreshTokensFallback={false}
      cacheLocation={'localstorage'}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0Wrapper
