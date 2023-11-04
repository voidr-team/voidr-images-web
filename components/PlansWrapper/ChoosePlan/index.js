import { Stack, Typography } from '@mui/joy'
import CardPricing from './CardPricing'
import plansInfo from './plansInfo'
import Button from '../../UI/Button'
import useChoosePlan from './useChoosePlan'
import useAuth from '@/context/auth/useAuth'

export default function ChoosePlan() {
  const { upgradePlan, isLoading } = useChoosePlan()
  const { user } = useAuth()
  return (
    <Stack marginTop={5}>
      <Typography fontSize={30} fontWeight="600" level="h4">
        Choose a plan to upgrade
      </Typography>

      <Stack gap={3} marginTop={4} direction="row" flexWrap="wrap">
        <CardPricing.Root>
          <CardPricing.Header title="Starter" benefit="5k images" />

          <CardPricing.Price>
            <Typography textAlign="center" fontSize={48}>
              Free
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.starter.benefits} />

          <CardPricing.Footer>
            {user.currentProject.plan === 'FREE' && (
              <Typography
                textAlign="center"
                level="body-md"
                paddingY="3px"
                textColor="neutral.300"
              >
                Current plan
              </Typography>
            )}
          </CardPricing.Footer>
        </CardPricing.Root>

        <CardPricing.Root>
          <CardPricing.Header title="Pro" benefit="100k images" />

          <CardPricing.Price>
            <Typography fontSize={48}>
              $60
              <Typography textColor="neutral.500" fontSize={20}>
                /month
              </Typography>
            </Typography>
            <Typography textColor="neutral.200" fontSize={16}>
              $1 per each 1k extra images
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.pro.benefits} />

          <CardPricing.Footer>
            {user.currentProject.plan === 'FREE' && (
              <Button onClick={upgradePlan} isLoading={isLoading}>
                Start now
              </Button>
            )}

            {user.currentProject.plan === 'PRO' && (
              <Typography
                textAlign="center"
                level="body-md"
                paddingY="3px"
                textColor="neutral.300"
              >
                Current plan
              </Typography>
            )}
          </CardPricing.Footer>
        </CardPricing.Root>

        <CardPricing.Root>
          <CardPricing.Header title="Enterprise" benefit="For heavy users" />

          <CardPricing.Price>
            <Typography textAlign="center" fontSize={25}>
              Custom pricing
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.enterprise.benefits} />

          <CardPricing.Footer>
            <Button>Contact Us</Button>
          </CardPricing.Footer>
        </CardPricing.Root>
      </Stack>
    </Stack>
  )
}
