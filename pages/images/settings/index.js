import OrganizationList from '@/components/Organization'
import ImageLayout from '@/layouts/ImageLayout'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'
import { useTranslation } from 'next-i18next'

export default function Settings() {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <ImageLayout title={t('settings.title')}>
      <OrganizationList />
    </ImageLayout>
  )
}

export const getStaticProps = loadAllTranslations
