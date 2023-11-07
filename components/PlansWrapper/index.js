import { Stack, Typography } from '@mui/joy'
import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'
import { ChevronRight } from 'lucide-react'
import useDashboard from '@/hooks/useDashboard'

export default function PlansWrapper() {
  const { data } = useDashboard()
  return (
    <div>
      <Typography
        fontWeight="600"
        level="h4"
        alignContent="center"
        alignItems="center"
        display="flex"
      >
        Plans <ChevronRight /> Starter
      </Typography>

      <PlanInfo usage={data?.usage} />
      <ChoosePlan />
    </div>
  )
}
