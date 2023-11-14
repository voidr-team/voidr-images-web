import { useForm } from 'react-hook-form'
import useSteps from '../Steps/useSteps'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import projectService from '@/services/project'
import toastEz from '@/utils/toastEz'
import { useAuth0 } from '@auth0/auth0-react'
import useAuth from '@/context/auth/useAuth'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
        .required('Campo obrigatório')
        .test(
          'is-valid-domain-or-asterisk',
          'Forneça um URL válido',
          (value) => value === '*' || yup.string().url().isValidSync(value)
        ),
    })
  ),
  name: yup
    .string()
    .matches(
      /^[a-z0-9-_]+$/,
      'O nome deve ser alfanumérico em minúsculas e só pode conter hífenes e sublinhados'
    )
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be at most 20 characters')
    .required('Campo obrigatório'),
  platform: yup.string().required('Campo obrigatório'),
})

export default function useOnboarding() {
  const { t } = useTranslation(['translations', 'common'])
  const { fetchUser, user } = useAuth()
  const { getAccessTokenSilently } = useAuth0()
  const steps = useSteps(formSteps)
  const router = useRouter()
  const userAlreadyCreateProject = user?.currentProject?.id

  const loadData = () => {
    try {
      return JSON.parse(sessionStorage.getItem('onboarding_data'))
    } catch (_) {
      return null
    }
  }

  const initialFormValues = loadData()

  const formMethods = useForm({
    defaultValues: initialFormValues || {
      domains: [{ domain: '' }],
      tech: 'node',
      framework: 'react',
    },
    resolver: yupResolver(schema),
  })

  const { mutate: createProject, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.POST_CREATE_PROJECT],
    mutationFn: (data) => {
      return projectService.postCreateProject({
        ...data,
        referral: sessionStorage.getItem('voidr_referral_slug'),
      })
    },
    onError: async (error) => {
      const message = error?.response?.data?.error
      toastEz.error(message)
    },
    onSuccess: async (data) => {
      toastEz.success(t('onboarding.toast.success'))
      const orgId = data?.data?.createdBy?.organizationId
      await getAccessTokenSilently({
        cacheMode: 'off',
        authorizationParams: {
          organization: orgId,
        },
      })
      await fetchUser()
      sessionStorage.removeItem('voidr_referral_slug')
      steps.nextStep()
    },
  })

  const persistData = (data) => {
    sessionStorage.setItem('onboarding_data', JSON.stringify(data))
  }

  const persistStep = (step) => {
    sessionStorage.setItem('onboarding_step', step)
  }

  const loadStep = () => {
    return sessionStorage.getItem('onboarding_step') || 0
  }

  const onSubmit = formMethods.handleSubmit((data) => {
    persistData(data)

    if (
      steps.getCurrentStepName() === 'CREATE_PROJECT' &&
      !userAlreadyCreateProject
    ) {
      return createProject({
        name: data?.name,
        domains: data?.domains?.map((domain) => domain?.domain),
      })
    }

    if (steps.getCurrentStepName() === 'SETUP') {
      return router.push('/images/dashboard')
    }

    if (!steps.isPostStep()) {
      return steps.nextStep()
    }
  })

  useEffect(() => {
    const step = loadStep()
    steps.sendToStep(Number(step))
  }, [])

  useEffect(() => {
    if (steps.getCurrentStepName() !== 'START') {
      router.replace({
        query: {
          track: `step${steps.current + 1}`,
        },
      })
    }
    persistStep(steps.current)
  }, [steps.current])

  return { steps, formMethods, onSubmit, isLoading, userAlreadyCreateProject }
}
