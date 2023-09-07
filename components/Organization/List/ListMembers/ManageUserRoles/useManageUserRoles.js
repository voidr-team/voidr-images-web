import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import toastEz from '@/utils/toastEz'

function useManageUserRoles(userId, setIsOpen) {
  const formMethods = useForm()
  const queryClient = useQueryClient()
  const { data, isLoadingRoles } = useQuery({
    queryKey: [organizationService.swrKeys.GET_ORGANIZATION_ROLES],
    queryFn: () => organizationService.getOrganizationRoles(),
  })

  const { mutate, isLoading: isLoadingUpdateRoles } = useMutation({
    mutationKey:
      organizationService.swrKeys.POST_ORGANIZATION_MEMBERS_ADD_ROLES,
    mutationFn: (data) =>
      organizationService.putAddRolesInMember(data.userId, data.roles),
    onSuccess: async () => {
      await queryClient.invalidateQueries([
        organizationService.swrKeys.GET_ORGANIZATION_MEMBERS,
      ])
      toastEz.success('Cargos atualizados com sucesso')
      setIsOpen(false)
    },
    onError: () => {
      toastEz.error('Ocorreu um erro ao atualizar os cargos')
    },
  })

  const onSubmit = formMethods.handleSubmit((form) => {
    const rolesId = form?.user_roles?.map((role) => role.id)

    const data = { userId, roles: rolesId }
    mutate(data)
  })

  return {
    roles: data?.data,
    isLoadingRoles,
    isLoadingUpdateRoles,
    onSubmit,
    formMethods,
  }
}

useManageUserRoles.propTypes = {
  userId: PropTypes.string,
  setIsOpen: PropTypes.func,
}

export default useManageUserRoles
