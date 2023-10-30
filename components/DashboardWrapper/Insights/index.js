import { Stack, Typography } from '@mui/joy'
import { Lightbulb, TrendingUp } from 'lucide-react'
import styles from './Insights.module.scss'

export default function Insights() {
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
          42 GB{' '}
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
            Use a opção xpto para carregar imagens especificamente para conexões
            lentas.
          </Typography>
          <a className={styles.viewDocs}>View docs</a>
        </Stack>

        <Stack gap={2}>
          <div className={styles.iconWrapper}>
            <Lightbulb />
          </div>

          <Typography fontSize={16} fontWeight="500" textColor="neutral.400">
            Use o face blur para anonimizar rostos em documentos e garanta mais
            segurança
          </Typography>
          <a className={styles.viewDocs}>View docs</a>
        </Stack>
      </Stack>
    </Stack>
  )
}
