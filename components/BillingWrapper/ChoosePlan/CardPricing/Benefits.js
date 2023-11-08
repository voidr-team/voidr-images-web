import { Stack, Typography } from '@mui/joy'

export default function Benefits({ benefits }) {
  return (
    <Stack gap={2} marginY={3}>
      {benefits?.map((benefit, index) => (
        <Typography level="body-md" textColor="neutral.400" key={index}>
          {benefit?.label}
        </Typography>
      ))}
    </Stack>
  )
}
