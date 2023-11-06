import PlanInfo from '@/components/PlanInfo'
import useAuth from '@/context/auth/useAuth'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import styles from './PlanUsage.module.scss'
import Widget from '@/components/UI/Widget'

export default function PlanUsage({ usage = 0 }) {
  const { user } = useAuth()
  const isProPlan = user?.currentProject?.plan === 'PRO'

  return (
    <Widget title={isProPlan ? 'Pro plan' : 'Free plan'}>
      <PlanInfo usage={usage} />

      <Link href="/common/plans">
        <div className={styles.linkWrapper}>
          <span>Upgrade</span>
          <ChevronRight color="#fff" />
        </div>
      </Link>
    </Widget>
  )
}
