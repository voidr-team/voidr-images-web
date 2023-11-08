import { Stack, Typography } from '@mui/joy'
import CardPricing from './CardPricing'
import plansInfo from './plansInfo'
import Button from '../../UI/Button'
import useChoosePlan from './useChoosePlan'
import useAuth from '@/context/auth/useAuth'

export default function ChoosePlan() {
  const { upgradePlan, isLoading, handleEnterpriseContact, getInTouch } =
    useChoosePlan()
  const { user } = useAuth()
  return (
    <Stack marginTop={5}>
      <Typography fontSize={20} fontWeight="600" level="h4">
        Plans
      </Typography>

      <Stack gap={3} marginTop={4} direction="row" flexWrap="wrap">
        <CardPricing.Root>
          <CardPricing.Header title="Pay as you grow" />

          <CardPricing.Price>
            <Typography fontSize={48}>$1</Typography>
            <Typography textColor="neutral.400" fontSize={20}>
              each 1k images
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.payAsGrow.benefits} />

          <CardPricing.Footer>
            {/* TODO: ADICIONAR A VALIDAÇÃO DE CURRENT PLAN PARA O PLANO PAY AS YOU GROW */}
            <Button onClick={upgradePlan} isLoading={isLoading}>
              Start now
            </Button>
          </CardPricing.Footer>
        </CardPricing.Root>

        <CardPricing.Root>
          <CardPricing.Header title="Enterprise" />

          <CardPricing.Price>
            <Typography textAlign="center" fontSize={40}>
              Custom
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.enterprise.benefits} />

          <CardPricing.Footer>
            {user?.currentProject?.plan === 'ENTERPRISE' && (
              <Typography
                textAlign="center"
                level="body-md"
                paddingY="3px"
                textColor="neutral.300"
              >
                Current plan
              </Typography>
            )}
            {user?.currentProject?.plan !== 'ENTERPRISE' && (
              <Button onClick={handleEnterpriseContact}>
                {getInTouch ? "We'll get in touch" : 'Contact Us'}
              </Button>
            )}
          </CardPricing.Footer>
        </CardPricing.Root>
      </Stack>
    </Stack>
  )
}
