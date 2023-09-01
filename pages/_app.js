import LoggedLayout from '../layouts/LoggedLayout'
import AuthProvider from '../context/auth/AuthProvider'
import { ToastContainer } from 'react-toastify'
import Auth0Wrapper from '../components/Auth0Wrapper'
import '../styles/main.scss'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// Fonts
import '@fontsource/space-grotesk'
import '@fontsource/inter'

import { CssVarsProvider } from '@mui/joy/styles'
import { CssBaseline } from '@mui/joy'
import theme from '@/utils/joy/theme'
import { useState } from 'react'
import {
  QueryClient,
  Hydrate,
  QueryClientProvider,
} from '@tanstack/react-query'

const VoidrApp = ({ Component, pageProps, ...props }) => {
  const currentRoute = props.router.route
  const publicRoutes = ['/login', '/signin', '/logout']
  const [queryClient] = useState(() => new QueryClient())

  const BaseComp = (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </CssVarsProvider>
      </Hydrate>
    </QueryClientProvider>
  )

  const isPublicRoute = publicRoutes.includes(currentRoute)
  if (isPublicRoute) {
    return <Auth0Wrapper>{BaseComp}</Auth0Wrapper>
  }

  return (
    <Auth0Wrapper>
      <AuthProvider>
        <LoggedLayout currentPage={currentRoute}>{BaseComp}</LoggedLayout>
        <ToastContainer />
      </AuthProvider>
    </Auth0Wrapper>
  )
}

export default appWithTranslation(VoidrApp)

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
