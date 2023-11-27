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

const getSchema = (step, t) => {
  return yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-z0-9-_]+$/, 'common:form_errors.invalid_project_name')
      .min(3, t('common:form_errors.name_length_min', { length: 3 }))
      .max(20, t('common:form_errors.name_length_max', { length: 20 }))
      .required('common:form_errors.required_field'),
    imageUrl:
      step === 0
        ? yup.string().optional()
        : yup
            .string()
            .required('common:form_errors.required_field')
            .test(
              'is-valid-domain-or-asterisk',
              'common:form_errors.invalid_url',
              (value) => value === '*' || yup.string().url().isValidSync(value)
            ),
  })
}

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
      tech: 'node',
      framework: 'react',
    },
    resolver: yupResolver(getSchema(steps.current, t)),
  })

  const { mutate: createProject, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.POST_CREATE_PROJECT],
    mutationFn: (data) => {
      return projectService.postCreateProject({
        ...data,
        domains: ['*'],
        referral: sessionStorage.getItem('voidr_referral_slug') ?? undefined,
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
  })

  useEffect(() => {
    const step = router.query.step || loadStep()
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
