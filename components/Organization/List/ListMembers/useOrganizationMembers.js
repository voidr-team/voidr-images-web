import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import { useCallback } from 'react'
import { confirm } from '@/components/Confirmation'
import toastEz from '@/utils/toastEz'

function useOrganizationMembers() {
  const queryClient = useQueryClient()
  const {
    data,
    isLoading: isLoadingGetMembers,
    isError,
  } = useQuery({
    queryKey: [organizationService.swrKeys.GET_ORGANIZATION_MEMBERS],
    queryFn: () => organizationService.getOrganizationMembers(),
  })

  const { mutate: requestDeleteMember, isLoading: deleteIsLoading } =
    useMutation({
      mutationKey: [organizationService.swrKeys.DELETE_ORGANIZATION_MEMBER],
      mutationFn: (userId) =>
        organizationService.deleteOrganizationMember(userId),
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          organizationService.swrKeys.GET_ORGANIZATION_MEMBERS,
        ])
        toastEz.success('Usuário removido')
      },
      onError: () => {
        toastEz.error('Ocorreu um erro ao remover o usuário')
      },
    })

  const deleteMember = useCallback(async (id) => {
    if (!id) return
    const confirmAction = await confirm({
      title: 'Você deseja remover o membro?',
      description: 'Você deseja mesmo remover o membro?',
    })

    if (confirmAction) {
      requestDeleteMember(id)
    }
  }, [])

  const isLoading = isLoadingGetMembers || deleteIsLoading

  return { data, isLoading, isError, deleteMember }
}

export default useOrganizationMembers
