import { Stack, Typography } from '@mui/joy'
import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'
import { ChevronRight } from 'lucide-react'

export default function PlansWrapper() {
  return (
    <Stack paddingX={3} marginY={4}>
      <Typography
        fontWeight="600"
        level="h4"
        alignContent="center"
        alignItems="center"
        display="flex"
      >
        Plans <ChevronRight /> Starter
      </Typography>

      <PlanInfo />
      <ChoosePlan />
    </Stack>
  )
}
