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

import { extendTheme, CssVarsProvider } from '@mui/joy/styles'
import { CssBaseline } from '@mui/joy'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#F9F8FC',
          100: '#E8E5F8',
          200: '#D2CCF3',
          300: '#827BA2',
          400: '#5D5879',
          500: '#3B3750',
          600: '#272436',
          700: '#1E272E',
          800: undefined,
          900: undefined,
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E1E1E1',
          400: '#CACACA',
          500: '#8E8E8E',
          600: '#4B4B4B',
          700: '#1F1F1F',
          800: undefined,
          900: undefined,
        },
        danger: {
          50: '#FFFBFB',
          100: '#FEF2F2',
          200: '#FFEBEE',
          300: '#FFCCD2',
          400: '#F49898',
          500: '#EB6F70',
          600: '#F64C4C',
          700: '#EC2D30',
          800: undefined,
          900: undefined,
        },
        warning: {
          50: '#FFFDFA',
          100: '#FFF9EE',
          200: '#FFF7E1',
          300: '#FFEAB3',
          400: '#FFDD82',
          500: '#FFC62B',
          600: '#FFAD0D',
          700: '#FE9B0E',
          800: undefined,
          900: undefined,
        },
        success: {
          50: '#FBFEFC',
          100: '#F2FAF6',
          200: '#E5F5EC',
          300: '#C0E5D1',
          400: '#97D4B4',
          500: '#6BC497',
          600: '#47B881',
          700: '#0C9D61',
          800: undefined,
          900: undefined,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#F9F8FC',
          100: '#E8E5F8',
          200: '#D2CCF3',
          300: '#827BA2',
          400: '#5D5879',
          500: '#3B3750',
          600: '#272436',
          700: '#1E272E',
          800: undefined,
          900: undefined,
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E1E1E1',
          400: '#CACACA',
          500: '#8E8E8E',
          600: '#4B4B4B',
          700: '#1F1F1F',
          800: undefined,
          900: undefined,
        },
        danger: {
          50: '#FFFBFB',
          100: '#FEF2F2',
          200: '#FFEBEE',
          300: '#FFCCD2',
          400: '#F49898',
          500: '#EB6F70',
          600: '#F64C4C',
          700: '#EC2D30',
          800: undefined,
          900: undefined,
        },
        warning: {
          50: '#FFFDFA',
          100: '#FFF9EE',
          200: '#FFF7E1',
          300: '#FFEAB3',
          400: '#FFDD82',
          500: '#FFC62B',
          600: '#FFAD0D',
          700: '#FE9B0E',
          800: undefined,
          900: undefined,
        },
        success: {
          50: '#FBFEFC',
          100: '#F2FAF6',
          200: '#E5F5EC',
          300: '#C0E5D1',
          400: '#97D4B4',
          500: '#6BC497',
          600: '#47B881',
          700: '#0C9D61',
          800: undefined,
          900: undefined,
        },
      },
    },
  },
})

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
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <LoggedLayout currentPage={currentRoute}>{BaseComp}</LoggedLayout>
        </CssVarsProvider>
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
