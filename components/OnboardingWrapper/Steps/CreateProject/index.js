import { Stack, Typography } from '@mui/joy'
import Input from '../../../Form/Input'
import RadioButton from '../../../Form/RadioButton'
import styles from './CreateProject.module.scss'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Trash } from 'lucide-react'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Label from '@/components/Form/Input/Label'
import { useTranslation } from 'next-i18next'
import stepsStyles from '../Steps.module.scss'
import Button from '@/components/UI/Button'

export default function CreateProject({ userAlreadyCreateProject, isLoading }) {
  const [parentStep1Ref] = useAutoAnimate()
  const { t } = useTranslation(['translations', 'common'])

  return (
    <div className={stepsStyles.stepsHolder}>
      <h3>Vamos começar</h3>
      <p>
        Antes de tudo, crie seu projeto para começar a utilizar a plataforma
      </p>
      <div className={stepsStyles.steps}>
        <div className={stepsStyles.step} ref={parentStep1Ref}>
          <h5>{t('onboarding.create_project.form.project.label')}</h5>
          <p>O nome do projeto será utilizado nas chamadas da API</p>
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
            Criar projeto
          </Button>
        </div>
      </div>
    </div>
  )
}
