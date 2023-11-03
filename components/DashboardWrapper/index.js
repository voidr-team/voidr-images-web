import dynamic from 'next/dynamic'
import { Stack } from '@mui/joy'
import LastProcessedFiles from './LastProcessedFiles'
import Insights from './Insights'
import PlanUsage from './PlanUsage'
import useDashboard from '@/hooks/useDashboard'
const TrafficDataGraph = dynamic(
  () => {
    return import('./TrafficDataGraph')
  },
  { ssr: false }
)

export default function DashboardWrapper() {
  const { data, isLoading } = useDashboard()
  const graphData = data?.imagesPerDay?.map(({ count, date }) => ({
    date: date,
    value: count,
  }))
  return (
    <Stack gap={3} paddingX={3} marginY={6}>
      <Stack direction={{ sm: 'column', md: 'row' }} gap={3}>
        <LastProcessedFiles />
        <Insights bytesSaved={data?.bytesSaved} />
      </Stack>

      <Stack
        width="100%"
        maxHeight="380px"
        direction={{ sm: 'column', md: 'row' }}
        gap={3}
      >
        {typeof window !== 'undefined' && !isLoading ? (
          <TrafficDataGraph data={graphData} />
        ) : null}
        <PlanUsage usage={data?.usage} />
      </Stack>
    </Stack>
  )
}
