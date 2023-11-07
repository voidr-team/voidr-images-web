import { Stack, Typography } from '@mui/joy'
import styles from './CardFile.module.scss'
import getImageSource from '@/utils/getImageSource'

export default function CardFile({
  imageUrl,
  imageName,
  imageSizeSaved,
  onClick,
}) {
  return (
    <Stack
      className={styles.cardFile}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <img src={getImageSource(imageUrl)} alt={imageName} height={150} />
      <Stack className={styles.content}>
        <Typography textColor="neutral.400" level="title-sm">
          {imageName}
        </Typography>
        <Typography textColor="neutral.500" level="body-xs" marginTop="auto">
          {imageSizeSaved}kb saved
        </Typography>
      </Stack>
    </Stack>
  )
}
