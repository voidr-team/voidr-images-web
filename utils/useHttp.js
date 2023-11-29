import { useAuth0 } from '@auth0/auth0-react'
import http from '../services/http'

const useHttp = () => {
  const { getAccessTokenSilently } = useAuth0()

  http.interceptors.request.use(async (config) => {
    if (config.skipAuth0Token) return config

    const token = await getAccessTokenSilently()

    config.headers.common['Authorization'] = `Bearer ${token}`

    return config
  })

  return {
    http,
  }
}

export default useHttp
