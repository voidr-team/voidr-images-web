import Input from '../../../Form/Input'
import styles from './CreateProject.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useTranslation } from 'next-i18next'
import stepsStyles from '../Steps.module.scss'
import Button from '@/components/UI/Button'

export default function CreateProject({ userAlreadyCreateProject, isLoading }) {
  const [parentStep1Ref] = useAutoAnimate()
  const { t } = useTranslation(['translations', 'common'])

  return (
    <div className={stepsStyles.stepsHolder}>
      <h3>{t('onboarding.create_project.title')}</h3>
      <p>{t('onboarding.create_project.subtitle')}</p>
      <div className={stepsStyles.steps}>
        <div className={stepsStyles.step} ref={parentStep1Ref}>
          <h5>{t('onboarding.create_project.form.project.label')}</h5>
          <p>{t('onboarding.create_project.form.project.description')}</p>
          <Input
            className={styles.projectInput}
            name="name"
            readOnly={userAlreadyCreateProject}
            placeholder={t(
              'onboarding.create_project.form.project.placeholder'
            )}
          />

          <Button
            size="small"
            theme="light"
            className={stepsStyles.action}
            isLoading={isLoading}
          >
            {t('onboarding.create_project.form.project.action')}
          </Button>
        </div>
      </div>
    </div>
  )
}
