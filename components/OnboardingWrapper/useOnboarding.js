import { useForm } from 'react-hook-form'
import useSteps from '../Steps/useSteps'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import projectService from '@/services/project'
import toastEz from '@/utils/toastEz'

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
  name: yup.string().required('Required field'),
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

  const { mutate: createProject, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.POST_CREATE_PROJECT],
    mutationFn: (data) => projectService.postCreateProject(data),
    onSuccess: () => {
      toastEz.success('Projeto criado com sucesso')
      steps.nextStep()
    },
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    if (steps.getCurrentStepName() === 'CREATE_PROJECT') {
      return createProject({
        name: data?.name,
        domains: data?.domains?.map((domain) => domain?.domain),
      })
    }

    if (!steps.isPostStep()) {
      return steps.nextStep()
    }
  })

  return { steps, formMethods, onSubmit, isLoading }
}
