import { useTranslation } from 'next-i18next'
import styles from './StepsCountMobile.module.scss'
import cn from 'classnames'

const onboardingSteps = (t) => [
  { number: 1, label: t('onboarding.steps.create_project') },
  { number: 2, label: t('onboarding.steps.setup') },
  { number: 3, label: t('onboarding.steps.start') },
]

export default function StepsCountMobile({ steps }) {
  const { t } = useTranslation(['translations', 'common'])

  return (
    <div className={styles.container}>
      {onboardingSteps(t)?.map((onboardingStep) => {
        const actualOrFinishedStep = steps.current + 1 >= onboardingStep.number

        return (
          <div
            className={cn(styles.stepContainer, {
              [styles.stepContainerActive]: actualOrFinishedStep,
            })}
            key={onboardingStep.number}
          />
        )
      })}
    </div>
  )
}
