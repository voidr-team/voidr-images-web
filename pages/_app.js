import LoggedLayout from '../layouts/LoggedLayout'
import AuthProvider from '../context/auth/AuthProvider'
import { ToastContainer } from 'react-toastify'
import Auth0Wrapper from '../components/Auth0Wrapper'
import '../styles/main.scss'
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const VoidrApp = ({ Component, pageProps, ...props }) => {
  const currentRoute = props.router.route
  const publicRoutes = ['/login', '/signin', '/logout']

  const BaseComp = <Component {...pageProps} />
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
