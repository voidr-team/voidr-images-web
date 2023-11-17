import PlanInfo from '../PlanInfo'
import ChoosePlan from './ChoosePlan'
import useDashboard from '@/hooks/useDashboard'
import Subscription from './Subscription'
import useAuth from '@/context/auth/useAuth'
import { useTranslation } from 'next-i18next'
import styles from './BillingWrapper.module.scss'

export default function BillingWrapper() {
  const { t } = useTranslation(['translations', 'common'])
  const { data } = useDashboard()
  const { user } = useAuth()

  return (
    <div>
      {user.currentProject?.plan !== 'FREE' ? (
        <PlanInfo usage={data?.usage} />
      ) : (
        <div className={styles.wrapperPlanUsage}>
          <h1>{data?.usage}</h1>
          <span>{t('plan_info.total_images')}</span>
        </div>
      )}
      <Subscription />
      <ChoosePlan />
    </div>
  )
}
