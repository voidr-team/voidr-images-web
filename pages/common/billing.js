import ImageLayout from '@/layouts/ImageLayout'
import BillingWrapper from '../../components/BillingWrapper'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'

export default function Billing() {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <ImageLayout title={t('billing.title')}>
      <BillingWrapper />
    </ImageLayout>
  )
}

export const getStaticProps = loadAllTranslations
