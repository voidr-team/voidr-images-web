import { Stack, Typography } from '@mui/joy'
import plan from '../plansInfo'
import { useTranslation } from 'react-i18next'
import { Check, X } from 'lucide-react'

const plans = {
  FREE: 0,
  PRO: 1,
  ENTERPRISE: 2,
}

export default function Benefits({ planSlug }) {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <Stack gap={2} marginY={3}>
      {plan?.map((benefit, index) => {
        const hasBenefit = plans[planSlug] >= benefit?.value

        return (
          <Stack direction="row" alignItems="center" gap={1} key={index}>
            {hasBenefit ? <Check color="#2EB272" /> : <X color="#A5A5A5" />}
            <Typography level="body-md" textColor="neutral.400">
              {t(benefit?.label)}
            </Typography>
          </Stack>
        )
      })}
    </Stack>
  )
}
