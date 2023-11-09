import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import toastEz from '@/utils/toastEz'
import { useTranslation } from 'next-i18next'

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Preencha um e-mail válido')
      .required('E-mail é obrigatório'),
  })
  .required()

function useInviteMember(setIsOpen) {
  const { t } = useTranslation(['translations', 'common'])
  const queryClient = useQueryClient()
  const formMethods = useForm({ resolver: yupResolver(schema) })

  const { data, isLoading: isLoadingRoles } = useQuery({
    queryKey: [organizationService.swrKeys.GET_ORGANIZATION_ROLES],
    queryFn: () => organizationService.getOrganizationRoles(),
  })

  const { mutate: sendInvite, isLoading: isLoadingSendInvite } = useMutation({
    mutationKey: [organizationService.swrKeys.POST_ORGANIZATION_INVITES],
    mutationFn: (data) => organizationService.postSendNewInvite(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        organizationService.swrKeys.GET_ORGANIZATION_INVITES,
      ])
      setIsOpen(false)
      formMethods.reset()
      toastEz.success(t('inviations.toast.success'))
    },
    onError: () => {
      toastEz.error(t('inviations.toast.error'))
    },
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    const formattedData = {
      ...data,
    }

    sendInvite(formattedData)
  })

  return {
    formMethods,
    onSubmit,
    isLoadingSendInvite,
    roles: data?.data,
    isLoadingRoles,
  }
}

export default useInviteMember
