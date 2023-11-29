import { useTranslation } from 'next-i18next'
import FilesList from '../../../components/Files'
import ImageLayout from '../../../layouts/ImageLayout'
import loadAllTranslations from '@/utils/i18n/loadAllTranslations'

export default function Files() {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <ImageLayout title={t('files.title')}>
      <FilesList />
    </ImageLayout>
  )
}

export const getStaticProps = loadAllTranslations
