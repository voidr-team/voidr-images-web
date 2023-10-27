import PlanInfo from '@/components/PlanInfo'
import { Stack, Typography } from '@mui/joy'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function PlanUsage() {
  return (
    <Stack
      minWidth="300px"
      maxHeight="350px"
      flex={1}
      padding={3.8}
      borderRadius={6}
      border={1}
      borderColor="neutral.600"
    >
      <Typography level="h4">Free plan</Typography>
      <PlanInfo />

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
