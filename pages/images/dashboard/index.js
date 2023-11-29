import DashboardWrapper from '@/components/DashboardWrapper'
import ImageLayout from '@/layouts/ImageLayout'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'

export default function Dashboard() {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <ImageLayout title={t('dashboard.title')}>
      <DashboardWrapper />
    </ImageLayout>
  )
}

export const getStaticProps = loadAllTranslations
