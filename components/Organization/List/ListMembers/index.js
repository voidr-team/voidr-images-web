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
import { useState } from 'react'
import ManageUserRoles from './ManageUserRoles'

function ListMembers() {
  const { data, isLoading, deleteMember } = useOrganizationMembers()
  const [isOpenManageUserRoles, setIsOpenManageUserRoles] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  if (isLoading)
    return (
      <Stack marginY={5}>
        <Loader />
      </Stack>
    )

  return (
    <Stack>
      <Table
        sx={{
          '& tr > *:first-child': {
            width: '50px',
          },
          '& tr > *:not(:first-child)': { textAlign: 'center' },
        }}
      >
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
          {data?.data.map((member, index) => (
            <tr key={`${member?.user_id}_${index}`}>
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
                    <Chip sx={() => ({ marginX: '5px' })} key={role.id}>
                      {role.name}
                    </Chip>
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
                      <MenuItem
                        onClick={() => {
                          setCurrentUser(member)
                          setIsOpenManageUserRoles(true)
                        }}
                      >
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

      <ManageUserRoles
        isOpen={isOpenManageUserRoles}
        setIsOpen={setIsOpenManageUserRoles}
        setUser={setCurrentUser}
        user={currentUser}
        title="Cargos do usuário"
      />
    </Stack>
  )
}

export default ListMembers
