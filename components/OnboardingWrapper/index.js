import Steps from './Steps'
import StepRender from '../Steps/StepRender'
import useOnboarding from './useOnboarding'
import { FormProvider } from 'react-hook-form'
import OnboardingSidebar from './OnboardingSidebar'
import LanguageSwitcher from '../LanguageSwitcher'
import styles from './OnboardingWrapper.module.scss'
import OnboardingHeaderMobile from './OnboardingHeaderMobile'
import StepsCountMobile from './StepsCountMobile'

export default function OnboardingWrapper() {
  const { steps, formMethods, onSubmit, isLoading, userAlreadyCreateProject } =
    useOnboarding()

  return (
    <section className={styles.container}>
      <OnboardingHeaderMobile />
      <StepsCountMobile steps={steps} />

      <div className={styles.wrapperContent}>
        <OnboardingSidebar steps={steps} />

        <aside className={styles.wrapper}>
          <LanguageSwitcher />
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
        </aside>
      </div>
    </section>
  )
}
