import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import LoadingPage from '@/components/LoadingPage'
import startMonitoring from '@/utils/monitoring'
import { useAuth0 } from '@auth0/auth0-react'
import useHttp from '@/utils/useHttp'
import persistCurrentRoute from '@/utils/auth/persisCurrentRoute'
import { isEmpty } from 'ramda'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const {
    logout,
    isAuthenticated,
    isLoading: isAuth0Loading,
    error,
    getAccessTokenSilently,
    loginWithRedirect,
  } = useAuth0()
  const router = useRouter()

  const { http } = useHttp()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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
    const { name, email, sub } = userData
    const isDevelopment = process.env.NODE_ENV === 'development'
    if (isDevelopment) {
      startMonitoring({ name, email, id: sub })
    }
  }

  const joinProject = async () => {
    await http.post('projects/join')
    if (router.pathname === '/') {
      await fetchUser().then(() => {
        return router.push('/images/dashboard')
      })
    }
  }

  // REFACTOR: separar todo o roteamento, estura melhor pratica
  const redirectAfterLogin = async (userData) => {
    const returnTo = sessionStorage.getItem('returnTo')

    const hasOrgId = !!userData?.organization?.id
    if (isEmpty(userData?.projects) && hasOrgId) {
      joinProject()
      return
    } else if (isEmpty(userData?.projects)) {
      return router.push('/onboarding')
    } else if (
      !hasOrgId ||
      userData.currentProject?.organizationId !== userData?.organization?.id
    ) {
      const orgId = userData.currentProject?.organizationId
      await getAccessTokenSilently({
        cacheMode: 'off',
        authorizationParams: {
          organization: orgId,
        },
      }).catch((e) => {
        if (e.error === 'login_required' || e.error === 'consent_required') {
          return loginWithRedirect({
            authorizationParams: {
              organization: orgId,
            },
          })
        }
      })
    }

    if (returnTo) {
      sessionStorage.removeItem('returnTo')
      router.push(returnTo)
      return
    }
    if (router.pathname === '/' || router.pathname === '/onboarding') {
      return router.push('/images/dashboard')
    }
  }

  const fetchUser = async () => {
    return fetchUserInfo().then((userData) => {
      const userWithProject = {
        ...userData,
        currentProject: userData?.projects[0],
      }
      setUser(userWithProject)
      return userWithProject
    })
  }

  useEffect(() => {
    async function startAuth() {
      if (error) {
        redirectToLogin(error)
        return
      }

      if (isAuth0Loading) {
        return
      }

      if (isAuthenticated) {
        setIsLoading(true)
        fetchUser()
          .then((userData) => {
            startLogger(userData)
            return redirectAfterLogin(userData)
          })
          .then(() => {
            setIsLoading(false)
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
  }, [isAuth0Loading, isAuthenticated])

  return (
    <>
      {user && !isLoading ? (
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
