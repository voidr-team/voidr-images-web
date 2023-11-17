import Head from 'next/head'
import OnboardingWrapper from '../../components/OnboardingWrapper'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'

export default function Onboarding() {
  return (
    <>
      <Head>
        <title>Voidr | Onboarding</title>
      </Head>
      <OnboardingWrapper />
    </>
  )
}

export const getStaticProps = loadAllTranslations
