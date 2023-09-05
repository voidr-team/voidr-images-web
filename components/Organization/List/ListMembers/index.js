import Icon from '@/components/UI/Icon'
import {
  Avatar,
  Chip,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Table,
  ListDivider,
  Typography,
} from '@mui/joy'
import useOrganizationMembers from './useOrganizationMembers'
import Loader from '@/components/UI/Loader'

function ListMembers() {
  const { data, isLoading, deleteMember } = useOrganizationMembers()

  if (isLoading)
    return (
      <Stack marginY={5}>
        <Loader />
      </Stack>
    )

  return (
    <Stack>
      <Table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((member) => (
            <tr key={member?.user_id}>
              <td>
                <Avatar
                  src={member.picture}
                  width={30}
                  height={30}
                  alt="User profile pic"
                />
              </td>
              <td>{member?.name}</td>
              <td>{member.email}</td>
              <td>
                {member.roles.length ? (
                  member.roles.map((role) => (
                    <Chip key={role.id}>{role.name}</Chip>
                  ))
                ) : (
                  <Chip>-</Chip>
                )}
              </td>

              <td>
                <Dropdown>
                  <MenuButton sx={{ padding: 1 }}>
                    <Icon height={20} width={20} id="More_Horizontal" />
                  </MenuButton>
                  <Menu>
                    <Stack padding="5px">
                      <MenuItem>
                        <Typography
                          fontSize={14}
                          fontWeight="600"
                          textColor="neutral.600"
                        >
                          Gerenciar cargos
                        </Typography>
                      </MenuItem>

                      <ListDivider />

                      <MenuItem onClick={() => deleteMember(member?.user_id)}>
                        <Icon height={20} width={20} id="Remove_Minus_Circle" />
                        <Typography
                          fontSize={14}
                          fontWeight="500"
                          textColor="danger.700"
                          paddingLeft={0.5}
                        >
                          Remover membro
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
  )
}

export default ListMembers
