import { Stack } from '@mui/joy'
import Steps from './Steps'
import StepRender from '../Steps/StepRender'
import useOnboarding from './useOnboarding'
import { FormProvider } from 'react-hook-form'
import OnboardingSidebar from './OnboardingSidebar'

export default function OnboardingWrapper() {
  const { steps, formMethods, onSubmit } = useOnboarding()

  return (
    <Stack direction="row" minHeight="100vh" bgcolor="primary.500">
      <OnboardingSidebar steps={steps} />

      <Stack marginLeft="350px">
        <form onSubmit={onSubmit}>
          <FormProvider {...formMethods}>
            <StepRender steps={steps} eq="CREATE_PROJECT">
              <Steps.CreateProject />
            </StepRender>

            <StepRender steps={steps} eq="SETUP">
              <Steps.Setup steps={steps} />
            </StepRender>

            <StepRender steps={steps} eq="START">
              <Steps.Finish />
            </StepRender>
          </FormProvider>
        </form>
      </Stack>
    </Stack>
  )
}
