import plan from '../plansInfo'
import { useTranslation } from 'react-i18next'
import { Check, X } from 'lucide-react'
import styles from './CardPricing.module.scss'

const plans = {
  FREE: 0,
  PRO: 1,
  ENTERPRISE: 2,
}

export default function Benefits({ planSlug }) {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <ul className={styles.benefitsWrapper}>
      {plan?.map((benefit, index) => {
        const hasBenefit = plans[planSlug] >= benefit?.value

        return (
          <li className={styles.listWrapper} key={index}>
            {hasBenefit ? <Check color="#2EB272" /> : <X color="#A5A5A5" />}
            {t(benefit?.label)}
          </li>
        )
      })}
    </ul>
  )
}
