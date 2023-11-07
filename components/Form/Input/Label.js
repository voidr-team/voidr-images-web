import { FormLabel, Typography } from '@mui/joy'

const Label = ({ children }) => (
  <FormLabel>
    <Typography textColor="neutral.200" fontWeight="600" fontSize={20}>
      {children}
    </Typography>
  </FormLabel>
)

export default Label
