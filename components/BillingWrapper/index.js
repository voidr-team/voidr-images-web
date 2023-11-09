import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'
import useDashboard from '@/hooks/useDashboard'
import Subscription from './Subscription'

export default function BillingWrapper() {
  const { data } = useDashboard()
  return (
    <div>
      <PlanInfo usage={data?.usage} />
      <Subscription />
      <ChoosePlan />
    </div>
  )
}
