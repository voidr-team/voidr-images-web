import { Stack, Typography } from '@mui/joy'
import Image from 'next/image'

function CardUser() {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Image src="/images/logo-small.svg" alt="user" width={50} height={50} />
      <Stack alignItems="flex-start" spacing={1}>
        <Typography textColor="neutral.100">Pedro Otávio</Typography>
        <Typography textColor="neutral.100">
          pedro.couto@bounties4.com
        </Typography>
      </Stack>
    </Stack>
  )
}

export default CardUser
