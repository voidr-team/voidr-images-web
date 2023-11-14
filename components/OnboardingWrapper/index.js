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
        <form id="onboardingForm" onSubmit={onSubmit}>
          <FormProvider {...formMethods}>
            <StepRender steps={steps} eq="CREATE_PROJECT">
              <Steps.CreateProject
                userAlreadyCreateProject={userAlreadyCreateProject}
              />
            </StepRender>

            <StepRender steps={steps} eq="SETUP">
              <Steps.OptimizeFirstImage steps={steps} />
            </StepRender>
          </FormProvider>

          {/* <Stack marginY={6} direction="row" gap={2}>
            {steps.isFirstStep || steps.isLastStep ? null : (
              <Button
                disabled={isLoading}
                onClick={steps.backStep}
                inverted
                type="button"
              >
                Back
              </Button>
            )}

            {steps.isLastStep ? null : (
              <Button form="onboardingForm" isLoading={isLoading} type="submit">
                {t('common:next')}
              </Button>
            )}
          </Stack> */}
        </form>
      </section>
    </Stack>
  )
}
