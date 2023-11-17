import Image from 'next/image'
import styles from './ReferralWrapper.module.scss'
import { Typography } from '@mui/joy'
import { useTranslation } from 'next-i18next'
import CopyURL from '../CopyURL'
import useAuth from '@/context/auth/useAuth'
import Icon from '../UI/Icon'

export default function ReferralWrapper() {
  const { t, i18n } = useTranslation(['translations', 'common'])
  const { user } = useAuth()

  const onShare = () => {
    require('share-api-polyfill')
    window.navigator
      .share(
        {
          title: t('referral.invite.title'),
          text: t('referral.invite.description'),
          url: `https://app.voidr.co/referral?slug=${user?.currentProject?.name}`,
        },
        {
          copy: true,
          email: true,
          whatsapp: true,
          telegram: true,
          language: i18n?.language ?? 'pt',
        }
      )
      .then(() => console.log('Shared!'))
      .catch((error) => console.error('Error on share', error))
  }

  return (
    <section className={styles.referralWrapper}>
      <Image
        src="/images/referral-illustration.svg"
        alt="Referral Ilustration Box To Represent The Rewards You Will Earn"
        width={330}
        height={375}
      />

      <div className={styles.content}>
        <Typography level="h3">{t('referral.invite.title')}</Typography>
        <Typography level="body-md">
          {t('referral.invite.description')}
        </Typography>

        <div className={styles.copyUrlWrapper}>
          <Typography level="body-md">
            {t('referral.invite.copy_url_title')}
          </Typography>
          <CopyURL
            url={`https://app.voidr.co/referral?slug=${user?.currentProject?.name}`}
          />
        </div>

        <div className={styles.shareLink}>
          <Typography level="body-md">
            {t('referral.invite.share_title')}
          </Typography>
          <Icon
            onClick={onShare}
            id="Whatsapp_Icon_Outlined"
            width={40}
            height={40}
          />
          <Icon
            onClick={onShare}
            id="Telegram_Icon_Outlined"
            width={40}
            height={40}
          />
        </div>
      </div>
    </section>
  )
}
