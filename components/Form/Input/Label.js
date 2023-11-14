import { FormLabel, Typography } from '@mui/joy'

const Label = ({ children }) => (
  <FormLabel sx={{ marginBottom: '5px' }}>
    <Typography textColor="neutral.200" fontWeight="600" fontSize={18}>
      {children}
    </Typography>
  </FormLabel>
)

export default Label
