import { Button, Stack, Typography, Input, FormLabel } from '@mui/joy'
import { FormProvider } from 'react-hook-form'
import useVendors from '../useVendors'

function VendorHeader() {
  const { formMethods, onSubmit } = useVendors()

  return (
    <Stack
      width="100%"
      padding="35px"
      height="100%"
      bgcolor="neutral.50"
      boxShadow="md"
      spacing={5}
    >
      <Stack maxWidth="500px" spacing={1}>
        <Typography fontSize="38px" level="h1">
          Encontre fornecedores
        </Typography>
        <Typography fontWeight="400" level="body-md">
          Visualize o perfil de risco de cada fornecedor e tome decisões
          baseadas em evidências de amadurecimento cibernético
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <FormProvider {...formMethods}>
          <form onSubmit={onSubmit}>
            <Stack
              flexWrap="wrap"
              alignItems="flex-end"
              direction="row"
              spacing={1}
            >
              <Stack>
                <FormLabel>Nome</FormLabel>
                <Input
                  placeholder="Busque pelo nome do fornecedor"
                  {...formMethods.register('field-one')}
                />
              </Stack>
              <Stack>
                <FormLabel>Categoria</FormLabel>
                <Input
                  placeholder="Selecione a categoria"
                  {...formMethods.register('field-two')}
                />
              </Stack>
              <Stack>
                <FormLabel>Área responsável</FormLabel>
                <Input
                  placeholder="Filtrar por área"
                  {...formMethods.register('field-three')}
                />
              </Stack>
              <Button type="submit">
                <Typography whiteSpace="nowrap" textColor="neutral.50">
                  Buscar fornecedores
                </Typography>
              </Button>
            </Stack>
          </form>
        </FormProvider>
      </Stack>
    </Stack>
  )
}

export default VendorHeader
