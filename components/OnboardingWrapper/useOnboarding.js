import { useForm } from 'react-hook-form'
import useSteps from '../Steps/useSteps'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import projectService from '@/services/project'
import toastEz from '@/utils/toastEz'
import { useAuth0 } from '@auth0/auth0-react'

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
        .required('Required field')
        .test(
          'is-valid-domain-or-asterisk',
          'Please provide a valid URL',
          (value) => value === '*' || yup.string().url().isValidSync(value)
        ),
    })
  ),
  name: yup
    .string()
    .matches(
      /^[A-Za-z0-9-_]+$/,
      'Name must be alphanumeric and can only contain hyphens and underscores'
    )
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be at most 20 characters')
    .required('Required field'),
  platform: yup.string().required('Required field'),
})

export default function useOnboarding() {
  const { getAccessTokenSilently } = useAuth0()
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
    onError: async (error) => {
      const message = error?.response?.data?.error
      toastEz.error(message)
    },
    onSuccess: async (data) => {
      toastEz.success('Projeto criado com sucesso')
      const orgId = data?.data?.createdBy?.organizationId
      await getAccessTokenSilently({
        cacheMode: 'off',
        authorizationParams: {
          organization: orgId,
        },
      })
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
