import { Stack } from '@mui/joy'
import Steps from './Steps'
import StepRender from '../Steps/StepRender'
import useOnboarding from './useOnboarding'
import { FormProvider } from 'react-hook-form'
import OnboardingSidebar from './OnboardingSidebar'
import Button from '../UI/Button'

export default function OnboardingWrapper() {
  const { steps, formMethods, onSubmit, isLoading } = useOnboarding()

  return (
    <Stack direction="row" minHeight="100vh" bgcolor="primary.500">
      <OnboardingSidebar steps={steps} />

      <Stack width="100%" minHeight="100vh" marginLeft="350px">
        <form id="onboardingForm" onSubmit={onSubmit}>
          <FormProvider {...formMethods}>
            <StepRender steps={steps} eq="CREATE_PROJECT">
              <Steps.CreateProject />
            </StepRender>

            <StepRender steps={steps} eq="SETUP">
              <Steps.Setup steps={steps} />
            </StepRender>

            <StepRender steps={steps} eq="START">
              <Steps.Finish steps={steps} />
            </StepRender>
          </FormProvider>

          <Stack marginY={6} direction="row" gap={2}>
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
                Next
              </Button>
            )}
          </Stack>
        </form>
      </Stack>
    </Stack>
  )
}
