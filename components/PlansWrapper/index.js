import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'
import useDashboard from '@/hooks/useDashboard'

export default function PlansWrapper() {
  const { data } = useDashboard()
  return (
    <div>
      <PlanInfo usage={data?.usage} />
      <ChoosePlan />
    </div>
  )
}
