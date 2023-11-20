import useAuth from '@/context/auth/useAuth'
import useSubscription from './useSubscription'
import styles from './Subscription.module.scss'
import { useTranslation } from 'next-i18next'
import InlineLink from '@/components/UI/InlineLink'

const Subscription = () => {
  const { user } = useAuth()
  const { onClickViewSubscription } = useSubscription()
  const { t } = useTranslation(['translations', 'common'])
  if (user.currentProject?.plan !== 'PRO') {
    return null
  }

  return (
    <div style={{ backgroundColor: 'red' }} className={styles.subscription}>
      <h5>{t('subscription.title')}</h5>
      <InlineLink onClick={onClickViewSubscription}>
        {t('subscription.description')}
      </InlineLink>
    </div>
  )
}

export default Subscription
