import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
import { confirm } from '@/components/Confirmation'
import toastEz from '@/utils/toastEz'
import { useTranslation } from 'next-i18next'

function useOrganizationMembers() {
  const queryClient = useQueryClient()
  const { t } = useTranslation(['translations', 'common'])
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
        toastEz.success(t('members.remove_member.toast.success'))
      },
      onError: () => {
        toastEz.error(t('members.remove_member.toast.error'))
      },
    })

  const deleteMember = async (id) => {
    if (!id) return
    const confirmAction = await confirm({
      title: t('members.remove_member.confirm.title'),
      description: t('members.remove_member.confirm.description'),
    })

    if (confirmAction) {
      requestDeleteMember(id)
    }
  }

  const isLoading = isLoadingGetMembers || deleteIsLoading

  return { data, isLoading, isError, deleteMember }
}

export default useOrganizationMembers
