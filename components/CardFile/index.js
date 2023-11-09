import { Stack, Typography } from '@mui/joy'
import styles from './CardFile.module.scss'
import getImageSource from '@/utils/getImageSource'
import formatBytes from '@/utils/formatBytes'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

export default function CardFile({
  imageUrl,
  imageName,
  imageSizeSaved,
  onClick,
  className,
}) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Stack
      className={cn(styles.cardFile, className)}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <img src={getImageSource(imageUrl)} alt={imageName} height={150} />
      <Stack className={styles.content}>
        <Typography
          level="body-sm"
          className={styles.imageName}
          title={imageName}
        >
          {imageName}
        </Typography>
        <Typography textColor="neutral.500" level="body-xs" marginTop="auto">
          {formatBytes(imageSizeSaved)} {t('common:saved')}
        </Typography>
      </Stack>
    </Stack>
  )
}
