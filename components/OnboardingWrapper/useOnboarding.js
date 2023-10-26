import { useForm } from 'react-hook-form'
import useSteps from '../Steps/useSteps'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const formSteps = {
  order: ['CREATE_PROJECT', 'SETUP', 'START'],
  current: 0,
  postStep: 'START',
}

const schema = yup.object().shape({
  domains: yup.array().of(
    yup.object().shape({
      domain: yup
        .string()
        .url('Please provide a valid URL')
        .required('Required field'),
    })
  ),
  project_name: yup.string().required('Required field'),
  platform: yup.string().required('Required field'),
})

export default function useOnboarding() {
  const steps = useSteps(formSteps)
  const formMethods = useForm({
    defaultValues: {
      domains: [{ domain: '' }],
      tech: 'node',
      framework: 'react',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    console.log(data)

    if (!steps.isPostStep()) {
      return steps.nextStep()
    }
  })

  return { steps, formMethods, onSubmit }
}
