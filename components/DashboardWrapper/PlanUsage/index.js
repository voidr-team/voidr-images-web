import PlanInfo from '@/components/PlanInfo'
import useAuth from '@/context/auth/useAuth'
import { Stack, Typography } from '@mui/joy'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function PlanUsage({ usage = 0 }) {
  const { user } = useAuth()
  const isProPlan = user.currentProject.plan === 'PRO'
  return (
    <Stack
      minWidth="300px"
      padding={3.8}
      borderRadius={6}
      border={1}
      borderColor="neutral.600"
    >
      <Typography level="h4">{isProPlan ? 'Pro plan' : 'Free plan'}</Typography>
      <PlanInfo usage={usage} />

      <Link href="/common/plans">
        <Stack marginTop={2} direction="row" alignItems="center" gap={1}>
          <Typography fontWeight="600" fontSize={18}>
            Upgrade
          </Typography>
          <ChevronRight color="#fff" />
        </Stack>
      </Link>
    </Stack>
  )
}
