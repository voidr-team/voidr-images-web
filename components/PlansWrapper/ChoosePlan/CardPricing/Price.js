import { Stack } from '@mui/joy'

export default function Price({ children }) {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      height="100%"
      maxHeight="110px "
    >
      {children}
    </Stack>
  )
}
