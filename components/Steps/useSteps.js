import { useState } from 'react'
import { assocPath, prop } from 'ramda'

const useSteps = (initialStepOrder) => {
  const [steps, setSteps] = useState(initialStepOrder)

  const nextStep = () => {
    if (steps.current + 1 < steps.order.length) {
      setSteps(assocPath(['current'], steps.current + 1))
    }
  }

  const sendToStep = (stepNumber) =>
    setSteps(assocPath(['current'], stepNumber))

  const backStep = () => {
    if (steps.current > 0) setSteps(assocPath(['current'], steps.current - 1))
  }

  const getCurrentStepName = () => prop(steps.current, steps.order)

  const setStepsOrder = (newStepsOrder) =>
    setSteps(assocPath(['order'], newStepsOrder))

  const isPostStep = () => {
    return getCurrentStepName() === steps.postStep
  }

  return {
    nextStep,
    sendToStep,
    backStep,
    getCurrentStepName,
    isFirstStep: steps.current === 0,
    isLastStep: steps.current === steps.order.length - 1,
    order: steps.order,
    setStepsOrder,
    isPostStep,
    current: steps.current,
  }
}

export default useSteps
