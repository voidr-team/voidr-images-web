import { ErrorMessage as ErrorMessagePrimitive } from '@hookform/error-message'
import { Stack, Typography } from '@mui/joy'

function ErrorMessage({ name, errors, personalizedMessage }) {
  return (
    <ErrorMessagePrimitive
      name={name}
      errors={errors}
      render={({ message }) => (
        <Stack marginY={1}>
          <Typography textColor={'danger.600'}>
            {message ?? personalizedMessage}
          </Typography>
        </Stack>
      )}
    />
  )
}

export default ErrorMessage
