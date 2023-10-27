import { Stack, Typography } from '@mui/joy'
import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'

export default function PlansWrapper() {
  return (
    <Stack paddingX={3} marginY={4}>
      <Typography fontWeight="600" level="h4">
        Plans &gt; Starter
      </Typography>

      <PlanInfo />
      <ChoosePlan />
    </Stack>
  )
}
