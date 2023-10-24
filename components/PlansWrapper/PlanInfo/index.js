import { Stack, Typography } from '@mui/joy'
import styles from './PlanInfo.module.scss'

function ProgressPlan({ level }) {
  return (
    <Stack className={styles.planInfo}>
      <Stack className={styles.bar} style={{ width: `${level}%` }} />
    </Stack>
  )
}

export default function PlanInfo() {
  return (
    <Stack marginTop={3} maxWidth="300px">
      <Stack gap={1} direction="row" alignItems="center">
        <Typography
          fontWeight="900"
          fontSize={30}
          textColor="neutral.400"
          level="title-lg"
        >
          5000
        </Typography>
        <Typography fontSize={16} textColor="neutral.300" level="body-xs">
          Total images
        </Typography>
      </Stack>

      <ProgressPlan level={80} />

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
              1200 images
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
              3800 images
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
