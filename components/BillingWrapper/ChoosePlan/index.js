import CardPricing from './CardPricing'
import Button from '../../UI/Button'
import useChoosePlan from './useChoosePlan'
import useAuth from '@/context/auth/useAuth'
import { useTranslation } from 'next-i18next'
import Checkout from '../Checkout'
import styles from './ChoosePlan.module.scss'

export default function ChoosePlan() {
  const {
    upgradePlan,
    handleEnterpriseContact,
    getInTouch,
    setIsOpen,
    isOpen,
  } = useChoosePlan()
  const { t } = useTranslation(['translations', 'common'])
  const { user } = useAuth()

  return (
    <>
      <section className={styles.wrapperChoosePlan}>
        <h5>{t('choose_plan.title')}</h5>

        <div className={styles.cardsPlanContainer}>
          <CardPricing.Root>
            <CardPricing.Header title={t('choose_plan.plans.1.title')} />

            <CardPricing.Price>
              <h1>{t('choose_plan.plans.1.value')}</h1>
              <p>{t('choose_plan.plans.1.description')}</p>
            </CardPricing.Price>

            <CardPricing.Benefits planSlug="FREE" />

            <CardPricing.Footer>
              {user?.currentProject?.plan === 'FREE' ? (
                <p>{t('choose_plan.current_plan')}</p>
              ) : null}
            </CardPricing.Footer>
          </CardPricing.Root>

          <CardPricing.Root>
            <CardPricing.Header title={t('choose_plan.plans.2.title')} />

            <CardPricing.Price>
              <h1>{t('choose_plan.plans.2.value')}</h1>
              <p>{t('choose_plan.plans.2.description')}</p>
            </CardPricing.Price>

            <CardPricing.Benefits planSlug="PRO" />

            <CardPricing.Footer>
              {user?.currentProject?.plan === 'PRO' && (
                <p>{t('choose_plan.current_plan')}</p>
              )}
              {user?.currentProject?.plan !== 'PRO' && (
                <Button onClick={upgradePlan}>
                  {t('choose_plan.start_now')}
                </Button>
              )}
            </CardPricing.Footer>
          </CardPricing.Root>

          <CardPricing.Root>
            <CardPricing.Header title={t('choose_plan.plans.3.title')} />

            <CardPricing.Price>
              <h3>{t('choose_plan.plans.3.value')}</h3>
            </CardPricing.Price>

            <CardPricing.Benefits planSlug="ENTERPRISE" />

            <CardPricing.Footer>
              {user?.currentProject?.plan === 'ENTERPRISE' && (
                <p>{t('choose_plan.current_plan')}</p>
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
        </div>
      </section>
      <Checkout setIsOpen={setIsOpen} open={isOpen} />
    </>
  )
}
