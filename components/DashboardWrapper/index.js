import { Stack } from '@mui/joy'
import LastProcessedFiles from './LastProcessedFiles'

export default function DashboardWrapper() {
  return (
    <Stack paddingX={3} marginY={4}>
      <LastProcessedFiles />
    </Stack>
  )
}
