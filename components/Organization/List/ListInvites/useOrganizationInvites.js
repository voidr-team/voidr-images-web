import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import { useCallback } from 'react'
import { confirm } from '@/components/Confirmation'
import toastEz from '@/utils/toastEz'
import { useTranslation } from 'next-i18next'

function useOrganizationInvites() {
  const { t } = useTranslation(['translations', 'common'])
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
        toastEz.success(t('inviations.toast.cancelled_success'))
      },
      onError: () => {
        toastEz.error(t('inviations.toast.cancelled_error'))
      },
    })

  const cancelInvite = useCallback(async (id) => {
    if (!id) return
    const confirmAction = await confirm({
      title: t('inviations.confirm.title'),
      description: t('inviations.confirm.description'),
      okLabel: t('inviations.confirm.okLabel'),
      cancelLabel: t('inviations.confirm.cancelLabel'),
    })

    if (confirmAction) {
      deleteInvite(id)
    }
  }, [])

  const isLoading = isLoadingGetInvites || isLoadingRevokeConvite

  return { data, isLoading, cancelInvite }
}

export default useOrganizationInvites
