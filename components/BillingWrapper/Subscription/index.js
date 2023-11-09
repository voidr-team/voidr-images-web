import useAuth from '@/context/auth/useAuth'
import { ExternalLink } from 'lucide-react'
import useSubscription from './useSubscription'
import { Typography } from '@mui/joy'
import styles from './Subscription.module.scss'
import { useTranslation } from 'react-i18next'

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
      <p className={styles.fakeLink} onClick={onClickViewSubscription}>
        <span>{t('subscription.description')}</span> <ExternalLink />
      </p>
    </div>
  )
}

export default Subscription
