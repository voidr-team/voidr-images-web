import useAuth from '@/context/auth/useAuth'
import useSubscription from './useSubscription'
import { Typography } from '@mui/joy'
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
    <div className={styles.subscription}>
      <Typography level="h4">{t('subscription.title')}</Typography>
      <InlineLink onClick={onClickViewSubscription}>
        {t('subscription.description')}
      </InlineLink>
    </div>
  )
}

export default Subscription
