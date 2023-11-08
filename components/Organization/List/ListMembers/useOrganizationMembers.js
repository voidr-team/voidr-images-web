import { useMutation, useQuery, useQueryClient } from 'react-query'
import organizationService from '@/services/organization'
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
        toastEz.success('User removed.')
      },
      onError: () => {
        toastEz.error('An error occurred while removing the user.')
      },
    })

  const deleteMember = async (id) => {
    if (!id) return
    const confirmAction = await confirm({
      title: 'Do you want to remove the member?',
      description: 'Do you really want to remove the member?',
    })

    if (confirmAction) {
      requestDeleteMember(id)
    }
  }

  const isLoading = isLoadingGetMembers || deleteIsLoading

  return { data, isLoading, isError, deleteMember }
}

export default useOrganizationMembers
