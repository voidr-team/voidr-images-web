import OnboardingWrapper from '../../components/OnboardingWrapper'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'

export default function Onboarding() {
  return <OnboardingWrapper />
}

export const getStaticProps = loadAllTranslations
