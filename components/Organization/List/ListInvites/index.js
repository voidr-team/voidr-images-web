import {
  Dropdown,
  ListDivider,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Table,
  Typography,
} from '@mui/joy'
import useOrganizationInvites from './useOrganizationInvites'
import Loader from '@/components/UI/Loader'
import dayjs from 'dayjs'
import Icon from '@/components/UI/Icon'
import CopyClipboard from '@/components/CopyClipboard'
import EmptyState from '@/components/UI/EmptyState'

function ListInvites() {
  const { data, isLoading, cancelInvite } = useOrganizationInvites()

  if (isLoading) {
    return (
      <Stack marginY={5}>
        <Loader />
      </Stack>
    )
  }

  return (
    <>
      {data?.data.length > 0 ? (
        <Stack>
          <Table>
            <thead>
              <tr>
                <th>Email</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Expires at</th>
                <th>Criado por</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((invite) => (
                <tr key={invite.id}>
                  <td>{invite.invitee.email}</td>
                  <td>Pending</td>
                  <td>{dayjs(invite.created_at).format('DD/MM/YYYY HH:mm')}</td>
                  <td>{dayjs(invite.expires_at).format('DD/MM/YYYY HH:mm')}</td>
                  <td>{invite.inviter.name}</td>
                  <td>
                    <Dropdown>
                      <MenuButton sx={{ padding: 1 }}>
                        <Icon height={20} width={20} id="More_Horizontal" />
                      </MenuButton>
                      <Menu>
                        <Stack padding="5px">
                          <CopyClipboard text={invite.invitation_url}>
                            <MenuItem>
                              <Typography
                                fontSize={14}
                                fontWeight="600"
                                textColor="neutral.600"
                              >
                                Copiar convite
                              </Typography>
                            </MenuItem>
                          </CopyClipboard>

                          <ListDivider />

                          <MenuItem onClick={() => cancelInvite(invite.id)}>
                            <Icon
                              height={20}
                              width={20}
                              id="Remove_Minus_Circle"
                            />
                            <Typography
                              fontSize={14}
                              fontWeight="500"
                              textColor="danger.700"
                              paddingLeft={0.5}
                            >
                              Remover convite
                            </Typography>
                          </MenuItem>
                        </Stack>
                      </Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Stack>
      ) : (
        <EmptyState content="You dont have any invitations to your organization at the moment" />
      )}
    </>
  )
}

export default ListInvites
