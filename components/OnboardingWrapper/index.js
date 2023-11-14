import { Stack } from '@mui/joy'
import Steps from './Steps'
import StepRender from '../Steps/StepRender'
import useOnboarding from './useOnboarding'
import { FormProvider } from 'react-hook-form'
import OnboardingSidebar from './OnboardingSidebar'
import Button from '../UI/Button'
import styles from './OnboardingWrapper.module.scss'
import { useTranslation } from 'next-i18next'

export default function OnboardingWrapper() {
  const { steps, formMethods, onSubmit, isLoading, userAlreadyCreateProject } =
    useOnboarding()
  const { t } = useTranslation(['translations', 'common'])
  return (
    <Stack direction="row" minHeight="100vh" bgcolor="primary.500">
      <OnboardingSidebar steps={steps} />

      <section className={styles.wrapper}>
        <FormProvider {...formMethods}>
          <form id="onboardingForm" onSubmit={onSubmit}>
            <StepRender steps={steps} eq="CREATE_PROJECT">
              <Steps.CreateProject
                userAlreadyCreateProject={userAlreadyCreateProject}
                isLoading={isLoading}
              />
            </StepRender>
            <StepRender steps={steps} eq="SETUP">
              <Steps.OptimizeFirstImage steps={steps} />
            </StepRender>
          </form>
        </FormProvider>
      </section>
    </Stack>
  )
}
