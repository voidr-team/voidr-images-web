import { Stack, Typography } from '@mui/joy'

function OrganizationHeader() {
  return (
    <Stack
      width="100%"
      maxHeight="270px"
      padding="35px"
      bgcolor="neutral.50"
      boxShadow="md"
      spacing={5}
    >
      <Stack maxWidth="600px" spacing={1}>
        <Typography fontSize="38px" level="h1">
          Organização
        </Typography>
        <Typography fontWeight="400" level="body-md">
          Aqui você pode gerenciar todas as configurações da sua organização,
          além de convidar e gerenciar usuários internos
        </Typography>
      </Stack>
    </Stack>
  )
}

export default OrganizationHeader
