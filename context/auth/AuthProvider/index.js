import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingPage from '@/components/LoadingPage'
// import { initLogger, loggerIdentify } from '@/utils/logger'
import { useAuth0 } from '@auth0/auth0-react'
import useHttp from '@/utils/useHttp'
import persistCurrentRoute from '@/utils/auth/persisCurrentRoute'
import { isEmpty } from 'ramda'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const { logout, isAuthenticated, isLoading, error } = useAuth0()
  const router = useRouter()

  const { http } = useHttp()

  const [user, setUser] = useState(null)

  function onLogout() {
    persistCurrentRoute()
    localStorage.clear()
    logout({
      returnTo: `${window.location.origin}/`,
    })
  }

  function redirectToLogin(error) {
    return router.push({
      pathname: '/login',
      query: {
        ...error,
      },
    })
  }

  async function fetchUserInfo() {
    const { data: payload } = await http('user/info')
    return payload
  }

  const startLogger = (userData) => {
    // const { name, email, id, onboarding } = userData
    const isDevelopment = process.env.NODE_ENV === 'development'
    if (!isDevelopment) {
      // const logger = initLogger()
      // loggerIdentify(logger)({ name, email, id })
    }
  }

  const redirectAfterLogin = (userData) => {
    const returnTo = sessionStorage.getItem('returnTo')
    if (isEmpty(userData?.projects)) {
      return router.push('/onboarding')
    }

    if (returnTo) {
      sessionStorage.removeItem('returnTo')
      router.push(returnTo)
      return
    } else {
      // TODO: DESCOMENTAR DEPOIS
      router.push('/images/dashboard')
    }
  }

  const fetchUser = () => {
    return fetchUserInfo().then((userData) => {
      setUser({ ...userData })
      return userData
    })
  }

  useEffect(() => {
    async function startAuth() {
      if (error) {
        redirectToLogin(error)
        return
      }

      if (isLoading) {
        return
      }

      if (isAuthenticated) {
        fetchUser()
          .then((userData) => {
            startLogger(userData)
            redirectAfterLogin(userData)
          })
          .catch((err) => {
            console.error(err)
            onLogout()
          })
      } else {
        redirectToLogin()
      }
    }

    startAuth()
  }, [isLoading, isAuthenticated])

  return (
    <>
      {user ? (
        <AuthContext.Provider
          value={{ user, onLogout, redirectToLogin, fetchUser }}
        >
          {children}
        </AuthContext.Provider>
      ) : (
        <>
          <LoadingPage />
        </>
      )}
    </>
  )
}

export default AuthProvider
