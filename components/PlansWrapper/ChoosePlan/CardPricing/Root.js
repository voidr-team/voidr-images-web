import { Stack } from '@mui/joy'

export default function Root({ children }) {
  return (
    <Stack
      width="100%"
      gap={3}
      border={1}
      p={3}
      maxWidth={300}
      borderColor="neutral.600"
      borderRadius={6}
      bgcolor="transparent"
    >
      {children}
    </Stack>
  )
}
