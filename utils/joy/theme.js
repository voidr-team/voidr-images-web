import { extendTheme } from '@mui/joy'

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
          600: '#4B4B4B',
        },
        danger: {
          600: '#F64C4C',
        },
        warning: {
          600: '#FFAD0D',
        },
        success: {
          600: '#47B881',
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
        },
        danger: {
          600: '#F64C4C',
        },
        warning: {
          600: '#FFAD0D',
        },
        success: {
          600: '#47B881',
        },
      },
    },
  },
  typography: { h1: { color: '#1F1F1F', fontSize: '42px' } },
  fontFamily: {
    display: '"Inter", var(--joy-fontFamily-fallback)',
    body: '"Inter", var(--joy-fontFamily-fallback)',
  },
})

export default theme
