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
  Divider,
  Typography,
} from '@mui/joy'

const MOCK_LIST = [
  {
    name: 'Victor Buchalla',
    email: 'pedro.couto@bounties.com',
    roles: 'ADMIN',
    id: 1,
  },
  {
    name: 'Pedro Otávio',
    email: 'pedro.couto@bounties.com',
    roles: 'ADMIN',
    id: 2,
  },
  {
    name: 'Milson Júnior',
    email: 'pedro.couto@bounties.com',
    roles: 'ADMIN',
    id: 3,
  },
]

function ListMembers() {
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
          {MOCK_LIST.map((list) => (
            <tr key={list.id}>
              <td>
                <Avatar color="success">PO</Avatar>
              </td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>
                <Chip>{list.roles}</Chip>
              </td>

              <td>
                <Dropdown>
                  <MenuButton>
                    <Icon height={20} width={20} id="More_Vertical " />
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

                      <Divider />

                      <MenuItem>
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
