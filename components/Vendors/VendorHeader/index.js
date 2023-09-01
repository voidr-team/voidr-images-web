import { Button, Stack, Typography } from '@mui/joy'
import Input from '../../Form/Input'
import useVendors from '../useVendors'
import { FormProvider } from 'react-hook-form'

function VendorHeader() {
  const { formMethods } = useVendors()

  return (
    <Stack
      width="100%"
      maxHeight="270px"
      padding="35px"
      bgcolor="neutral.50"
      boxShadow="md"
      spacing={5}
    >
      <Stack maxWidth="500px" spacing={1}>
        <Typography fontSize="38px" level="h1">
          Encontre fornecedores
        </Typography>
        <Typography fontFamily="Space Grotesk" fontWeight="400" level="body-md">
          Visualize o perfil de risco de cada fornecedor e tome decisões
          baseadas em evidências de amadurecimento cibernético
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <FormProvider {...formMethods}>
          <Input
            placeholder="Busque pelo nome do fornecedor"
            label="Nome"
            {...formMethods.register('field-one')}
          />
          <Input
            placeholder="Selecione a categoria"
            label="Categoria"
            {...formMethods.register('field-two')}
          />
          <Input
            placeholder="Filtrar por área"
            label="Área responsável"
            {...formMethods.register('field-three')}
          />
          <Button>
            <Typography whiteSpace="nowrap" textColor="neutral.50">
              Buscar fornecedores
            </Typography>
          </Button>
        </FormProvider>
      </Stack>
    </Stack>
  )
}

export default VendorHeader
