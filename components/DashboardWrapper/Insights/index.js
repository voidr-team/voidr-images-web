import { Stack, Typography } from '@mui/joy'
import { Lightbulb, TrendingUp } from 'lucide-react'
import styles from './Insights.module.scss'
import formatBytes from '@/utils/formatBytes'

export default function Insights({ bytesSaved = 0 }) {
  return (
    <Stack
      minWidth="320px"
      flex={1}
      padding={3.8}
      borderRadius={6}
      border={1}
      borderColor="neutral.600"
    >
      <Typography level="h4">Insights</Typography>

      <Stack marginY={2}>
        <Typography fontWeight="600" fontSize={50}>
          {formatBytes(bytesSaved)}{' '}
          <Typography fontWeight="500" fontSize={16} textColor="neutral.400">
            Saved data
          </Typography>
        </Typography>
      </Stack>

      <Stack gap={5}>
        <Stack gap={2}>
          <div className={styles.iconWrapper}>
            <TrendingUp />
          </div>

          <Typography fontSize={16} fontWeight="500" textColor="neutral.400">
            {`Use the "convert:webp" and "compress:80" option to load images
            specifically for slow connections.`}
          </Typography>
          {/* <a className={styles.viewDocs}>View docs</a> */}
        </Stack>

        <Stack gap={2}>
          <div className={styles.iconWrapper}>
            <Lightbulb />
          </div>

          <Typography fontSize={16} fontWeight="500" textColor="neutral.400">
            {`Use "crop:400x,position:attention" to crop the image in areas that
            contain the presence of faces.`}
          </Typography>
          {/* <a className={styles.viewDocs}>View docs</a> */}
        </Stack>
      </Stack>
    </Stack>
  )
}
