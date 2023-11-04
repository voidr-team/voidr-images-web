import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import toastEz from '@/utils/toastEz'
import projectService from '@/services/project'
import { useMutation } from 'react-query'

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
})

export default function useChangeDomains({ domains }) {
  const { mutate: updateDomain, isLoading } = useMutation({
    mutationKey: [projectService.swrKeys.UPDATE_DOMAIN],
    mutationFn: (data) => projectService.updateDomain(data),
    onSuccess: async () => {
      toastEz.success('Domains updated')
    },
  })

  const formMethods = useForm({
    defaultValues: {
      domains: domains?.map((domain) => ({ domain })) || [{ domain: '' }],
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    const domains = data.domains.map((dom) => dom.domain)
    updateDomain(domains)
  })

  return { formMethods, onSubmit, isLoading }
}
