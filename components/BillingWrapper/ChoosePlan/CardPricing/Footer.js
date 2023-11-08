import { Stack } from '@mui/joy'

export default function Footer({ children }) {
  return (
    <Stack flex={1} justifyContent="flex-end" alignItems="center">
      {children}
    </Stack>
  )
}
