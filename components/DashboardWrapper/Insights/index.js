import { Lightbulb, TrendingUp } from 'lucide-react'
import styles from './Insights.module.scss'
import Widget from '@/components/UI/Widget'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

export default function Insights() {
  const { t, i18n } = useTranslation(['translations', 'common'])

  return (
    <Widget title={t('insights.title')}>
      <article className={styles.helpBox}>
        <div className={styles.iconWrapper}>
          <TrendingUp />
        </div>

        <p>{t('insights.content.1')}</p>
      </article>

      <article className={styles.helpBox}>
        <div className={styles.iconWrapper}>
          <Lightbulb />
        </div>

        <p>{t('insights.content.2')}</p>
      </article>

      {!i18n.language === 'en' ? null : (
        <a
          href="https://chat.whatsapp.com/HGk47PecZXRFRgxJ32PKX0"
          target="_blank"
          rel="noreferrer"
        >
          <figure className={styles.bannerImageWrapper}>
            <Image
              src="/images/voidr-banner-pt.png"
              alt="Banner Voidr Enter Comunnity"
              width={300}
              height={300}
              quality={100}
              priority={true}
            />
          </figure>
        </a>
      )}
    </Widget>
  )
}
