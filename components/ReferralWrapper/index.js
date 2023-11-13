import Image from 'next/image'
import styles from './ReferralWrapper.module.scss'
import { Typography } from '@mui/joy'
import { useTranslation } from 'next-i18next'

export default function ReferralWrapper() {
  const { t } = useTranslation(['translations', 'common'])

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
      </div>
    </section>
  )
}
