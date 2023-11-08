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

  const { mutate: deleteInvite, isLoading: isLoadingRevokeConvite } =
    useMutation({
      mutationKey: [organizationService.swrKeys.DELETE_ORGANIZATION_INVITE],
      mutationFn: (id) => organizationService.deleteOrganizationInvite(id),
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          organizationService.swrKeys.GET_ORGANIZATION_INVITES,
        ])
        toastEz.success('Invitation cancelled.')
      },
      onError: () => {
        toastEz.error('An error occurred while canceling the invitation.')
      },
    })

  const cancelInvite = useCallback(async (id) => {
    if (!id) return
    const confirmAction = await confirm({
      title: 'Cancel invitation?',
      description: 'Would you really like to cancel the invitation?',
      okLabel: 'Cancel invitation',
      cancelLabel: 'Back',
    })

    if (confirmAction) {
      deleteInvite(id)
    }
  }, [])

  const isLoading = isLoadingGetInvites || isLoadingRevokeConvite

  return { data, isLoading, cancelInvite }
}

export default useOrganizationInvites
