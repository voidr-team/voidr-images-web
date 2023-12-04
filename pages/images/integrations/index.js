import IntegrationsWrapper from '@/components/IntegrationsWrapper'
import ImageLayout from '@/layouts/ImageLayout'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'

export default function Integrations() {
  const { t } = useTranslation(['translations'])

  return (
    <ImageLayout title={t('integrations.title')}>
      <IntegrationsWrapper />
    </ImageLayout>
  )
}

export const getStaticProps = loadAllTranslations
