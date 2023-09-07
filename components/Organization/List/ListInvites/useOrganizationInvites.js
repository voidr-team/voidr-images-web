import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import { useCallback } from 'react'
import { confirm } from '@/components/Confirmation'
import toastEz from '@/utils/toastEz'

function useOrganizationInvites() {
  const queryClient = useQueryClient()
  const { data, isLoading: isLoadingGetInvites } = useQuery({
    queryKey: [organizationService.swrKeys.GET_ORGANIZATION_INVITES],
    queryFn: () => organizationService.getOrganizationInvites(),
  })

  const { mutate: requestCancelInvite, isLoading: isLoadingRevokeConvite } =
    useMutation({
      mutationKey: [organizationService.swrKeys.DELETE_ORGANIZATION_INVITE],
      mutationFn: (id) => organizationService.deleteOrganizationInvite(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          organizationService.swrKeys.GET_ORGANIZATION_INVITES,
        ])
        toastEz.success('Convite cancelado.')
      },
      onError: () => {
        toastEz.error('Ocorreu um erro ao cancelar o convite')
      },
    })

  const cancelInvite = useCallback(async (id) => {
    if (!id) return
    const confirmAction = await confirm({
      title: 'Você deseja cancelar o convite?',
      description: 'Você deseja mesmo cancelar o convite?',
    })

    if (confirmAction) {
      requestCancelInvite(id)
    }
  }, [])

  const isLoading = isLoadingGetInvites || isLoadingRevokeConvite

  return { data, isLoading, cancelInvite }
}

export default useOrganizationInvites
