import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import toastEz from '@/utils/toastEz'
import projectService from '@/services/project'
import { useMutation } from 'react-query'
import { useTranslation } from 'next-i18next'

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
})

export default function useChangeDomains({ domains }) {
  const { t } = useTranslation(['translations', 'common'])
  const { mutate: updateDomain, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.UPDATE_DOMAIN],
    mutationFn: (data) => projectService.updateDomain(data),
    onSuccess: async () => {
      toastEz.success(t('change_domains.toast.success'))
    },
  })

  const formMethods = useForm({
    defaultValues: {
      domains: domains?.map((domain) => ({ domain })) || [{ domain: '' }],
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    const domains = data?.domains?.map((dom) => dom.domain)
    updateDomain(domains)
  })

  return { formMethods, onSubmit, isLoading }
}
