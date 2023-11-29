import LoadingPage from '../components/LoadingPage'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'

export default function IndexPage() {
  return <LoadingPage />
}

export const getStaticProps = loadAllTranslations
