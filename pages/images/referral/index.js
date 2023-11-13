import ReferralWrapper from '@/components/ReferralWrapper'
import ImageLayout from '@/layouts/ImageLayout'
import { useTranslation } from 'next-i18next'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'

export default function Referral() {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <ImageLayout title={t('referral.title')}>
      <ReferralWrapper />
    </ImageLayout>
  )
}

export const getStaticProps = loadAllTranslations
