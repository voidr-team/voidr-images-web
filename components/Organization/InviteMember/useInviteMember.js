import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import toastEz from '@/utils/toastEz'

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
  const queryClient = useQueryClient()
  const formMethods = useForm({ resolver: yupResolver(schema) })

  const { data, isLoading: isLoadingRoles } = useQuery({
    queryKey: [organizationService.swrKeys.GET_ORGANIZATION_ROLES],
    queryFn: () => organizationService.getOrganizationRoles(),
  })

  const { mutate, isLoading: isLoadingSendInvite } = useMutation({
    mutationKey: [organizationService.swrKeys.POST_ORGANIZATION_INVITES],
    mutationFn: (data) => organizationService.postSendNewInvite(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        organizationService.swrKeys.GET_ORGANIZATION_INVITES,
      ])
      setIsOpen(false)
      formMethods.reset()
      toastEz.success('Convite enviado')
    },
    onError: () => {
      toastEz.error('Ocorreu um erro ao enviar o convite')
    },
  })

  const onSubmit = formMethods.handleSubmit((data) => {
    const formattedData = {
      ...data,
      roles: data?.roles.map((role) => role?.id),
    }

    mutate(formattedData)
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