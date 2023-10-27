import { Stack } from '@mui/joy'
import LastProcessedFiles from './LastProcessedFiles'
import Insights from './Insights'
import PlanUsage from './PlanUsage'
import TrafficDataGraph from './TrafficDataGraph'

export default function DashboardWrapper() {
  return (
    <Stack gap={3} paddingX={3} marginY={6}>
      <Stack direction={{ sm: 'column', md: 'row' }} gap={3}>
        <LastProcessedFiles />
        <Insights />
      </Stack>

      <Stack direction={{ sm: 'column', md: 'row' }} gap={3}>
        <TrafficDataGraph />
        <PlanUsage />
      </Stack>
    </Stack>
  )
}
