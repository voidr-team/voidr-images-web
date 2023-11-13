import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'
import useDashboard from '@/hooks/useDashboard'
import Subscription from './Subscription'
import useAuth from '@/context/auth/useAuth'
import { Stack, Typography } from '@mui/joy'
import { useTranslation } from 'next-i18next'

export default function BillingWrapper() {
  const { t } = useTranslation(['translations', 'common'])
  const { data } = useDashboard()
  const { user } = useAuth()

  return (
    <div>
      {user.currentProject?.plan === 'FREE' ? (
        <PlanInfo usage={data?.usage} />
      ) : (
        <Stack gap={1} direction="row" alignItems="center">
          <Typography fontWeight="900" fontSize={46} level="title-lg">
            {data?.usage}
          </Typography>
          <Typography fontSize={16} level="body-xs">
            {t('plan_info.total_images')}
          </Typography>
        </Stack>
      )}

      <Subscription />
      <ChoosePlan />
    </div>
  )
}
