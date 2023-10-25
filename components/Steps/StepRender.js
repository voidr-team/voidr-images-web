const StepRender = ({ steps, eq, children }) => {
  const currentStep = steps.getCurrentStepName()

  return currentStep === eq ? <>{children}</> : null
}

export default StepRender
