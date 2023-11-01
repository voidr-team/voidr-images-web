import { Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import styles from './CardFile.module.scss'

export default function CardFile({ imageUrl, imageName, imageSizeSaved }) {
  return (
    <Stack className={styles.cardFile}>
      <Image src={imageUrl} alt={imageName} width={200} height={150} />
      <Stack className={styles.content}>
        <Typography textColor="neutral.400" level="title-sm">
          {imageName}
        </Typography>
        <Typography textColor="neutral.500" level="body-xs">
          {imageSizeSaved}kb saved
        </Typography>
      </Stack>
    </Stack>
  )
}
