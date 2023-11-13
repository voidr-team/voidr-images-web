import { Stack, Typography } from '@mui/joy'
import CardPricing from './CardPricing'
import plansInfo from './plansInfo'
import Button from '../../UI/Button'
import useChoosePlan from './useChoosePlan'
import useAuth from '@/context/auth/useAuth'
import { useTranslation } from 'next-i18next'

export default function ChoosePlan() {
  const { upgradePlan, isLoading, handleEnterpriseContact, getInTouch } =
    useChoosePlan()
  const { t } = useTranslation(['translations', 'common'])
  const { user } = useAuth()

  return (
    <Stack marginTop={5}>
      <Typography fontSize={20} fontWeight="600" level="h4">
        {t('choose_plan.title')}
      </Typography>

      <Stack gap={3} marginTop={4} direction="row" flexWrap="wrap">
        <CardPricing.Root>
          <CardPricing.Header title={t('choose_plan.plans.1.title')} />

          <CardPricing.Price>
            <Typography fontSize={48}>
              {t('choose_plan.plans.1.value')}
            </Typography>
            <Typography textColor="neutral.400" fontSize={20}>
              {t('choose_plan.plans.1.description')}
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.free.benefits(t)} />

          <CardPricing.Footer>
            {user?.currentProject?.plan === 'FREE' ? (
              <Typography
                textAlign="center"
                level="body-md"
                paddingY="3px"
                textColor="neutral.300"
              >
                {t('choose_plan.current_plan')}
              </Typography>
            ) : null}
          </CardPricing.Footer>
        </CardPricing.Root>

        <CardPricing.Root>
          <CardPricing.Header title={t('choose_plan.plans.2.title')} />

          <CardPricing.Price>
            <Typography fontSize={48}>
              {t('choose_plan.plans.2.value')}
            </Typography>
            <Typography textColor="neutral.400" fontSize={20}>
              {t('choose_plan.plans.2.description')}
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.payAsGrow.benefits(t)} />

          <CardPricing.Footer>
            {user?.currentProject?.plan === 'PRO' && (
              <Typography
                textAlign="center"
                level="body-md"
                paddingY="3px"
                textColor="neutral.300"
              >
                {t('choose_plan.current_plan')}
              </Typography>
            )}
            {user?.currentProject?.plan !== 'PRO' && (
              <Button onClick={upgradePlan} isLoading={isLoading}>
                {t('choose_plan.start_now')}
              </Button>
            )}
          </CardPricing.Footer>
        </CardPricing.Root>

        <CardPricing.Root>
          <CardPricing.Header title={t('choose_plan.plans.3.title')} />

          <CardPricing.Price>
            <Typography textAlign="center" fontSize={40}>
              {t('choose_plan.plans.3.value')}
            </Typography>
          </CardPricing.Price>

          <CardPricing.Benefits benefits={plansInfo.enterprise.benefits(t)} />

          <CardPricing.Footer>
            {user?.currentProject?.plan === 'ENTERPRISE' && (
              <Typography
                textAlign="center"
                level="body-md"
                paddingY="3px"
                textColor="neutral.300"
              >
                {t('choose_plan.current_plan')}
              </Typography>
            )}
            {user?.currentProject?.plan !== 'ENTERPRISE' && (
              <Button onClick={handleEnterpriseContact}>
                {getInTouch
                  ? t('choose_plan.we_ll_get_in_touch')
                  : t('choose_plan.contact_us')}
              </Button>
            )}
          </CardPricing.Footer>
        </CardPricing.Root>
      </Stack>
    </Stack>
  )
}
