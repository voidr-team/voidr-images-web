import { Stack, Typography } from '@mui/joy'

export default function Header({ title, benefit }) {
  return (
    <Stack textAlign="center" gap={2}>
      <Typography level="title-lg" fontWeight="600" fontSize={20}>
        {title}
      </Typography>
      <Typography
        level="title-lg"
        fontWeight="500"
        textColor="neutral.500"
        fontSize={16}
      >
        {benefit}
      </Typography>
    </Stack>
  )
}
