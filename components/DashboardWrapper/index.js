import dynamic from 'next/dynamic'
import { Stack } from '@mui/joy'
import LastProcessedFiles from './LastProcessedFiles'
import Insights from './Insights'
import PlanUsage from './PlanUsage'
const TrafficDataGraph = dynamic(
  () => {
    return import('./TrafficDataGraph')
  },
  { ssr: false }
)

export default function DashboardWrapper() {
  return (
    <Stack gap={3} paddingX={3} marginY={6}>
      <Stack direction={{ sm: 'column', md: 'row' }} gap={3}>
        <LastProcessedFiles />
        <Insights />
      </Stack>

      <Stack maxHeight="350px" direction={{ sm: 'column', md: 'row' }} gap={3}>
        {typeof window !== 'undefined' ? <TrafficDataGraph /> : null}
        <PlanUsage />
      </Stack>
    </Stack>
  )
}
