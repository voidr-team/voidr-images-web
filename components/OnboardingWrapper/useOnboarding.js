import { useForm } from 'react-hook-form'
import useSteps from '../Steps/useSteps'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import projectService from '@/services/project'
import toastEz from '@/utils/toastEz'
import { useEffect } from 'react'
import useAuth from '@/context/auth/useAuth'
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
        .url('Please provide a valid URL')
        .required('Required field'),
    })
  ),
  name: yup.string().required('Required field'),
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
  const { user } = useAuth()

  const { mutate: createProject, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.POST_CREATE_PROJECT],
    mutationFn: (data) => projectService.postCreateProject(data),
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

  const saveStepInStorage = (stepNumber) => {
    sessionStorage.setItem(user?.sub + '_profileBuilderData_step', stepNumber)
  }

  const getStepInStorage = () => {
    return sessionStorage.getItem(user?.sub + '_profileBuilderData_step')
  }

  useEffect(() => {
    if (steps.current && steps.current > 0 && !steps.isLastStep) {
      saveStepInStorage(steps.current)
    }
  }, [steps.current])

  useEffect(() => {
    const stepNumber = Number(getStepInStorage())
    if (stepNumber !== 0 && !isNaN(stepNumber)) {
      steps.sendToStep(stepNumber)
    }
  }, [user?.sub])

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
