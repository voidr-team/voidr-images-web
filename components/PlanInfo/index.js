import { Stack, Typography } from '@mui/joy'
import styles from './PlanInfo.module.scss'

function ProgressPlan({ level }) {
  const width = level > 100 ? '100' : level
  return (
    <Stack className={styles.planInfo}>
      <Stack className={styles.bar} style={{ width: `${width}%` }} />
    </Stack>
  )
}

export default function PlanInfo({ usage = 0, totalImages = 1000 }) {
  return (
    <Stack marginTop={3} maxWidth="300px">
      <Stack gap={1} direction="row" alignItems="center">
        <Typography
          fontWeight="900"
          fontSize={46}
          textColor="neutral.400"
          level="title-lg"
        >
          {usage}
        </Typography>
        <Typography fontSize={16} textColor="neutral.300" level="body-xs">
          Total images
        </Typography>
      </Stack>

      <ProgressPlan level={(usage / totalImages) * 100} />

      <Stack direction="row" justifyContent="space-between">
        <Stack
          className={styles.planUseInfo}
          direction="row"
          alignItems="flex-start"
          marginTop={3}
          gap={1}
        >
          <div
            className={styles.smallBadge}
            style={{ backgroundColor: 'var(--helper-600)' }}
          />

          <Stack>
            <Typography
              lineHeight={0.6}
              textColor="neutral.500"
              level="body-sm"
            >
              Processed
            </Typography>
            <Typography lineHeight={3} fontWeight="600" level="body-sm">
              {usage} images
            </Typography>
          </Stack>
        </Stack>

        <Stack
          className={styles.planUseInfo}
          direction="row"
          alignItems="flex-start"
          marginTop={3}
          gap={1}
        >
          <div
            className={styles.smallBadge}
            style={{ backgroundColor: 'var(--primary-300)' }}
          />

          <Stack>
            <Typography
              lineHeight={0.6}
              textColor="neutral.500"
              level="body-sm"
            >
              Left
            </Typography>
            <Typography lineHeight={3} fontWeight="600" level="body-sm">
              {totalImages - usage} images
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}