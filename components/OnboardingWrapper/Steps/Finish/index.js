import { Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import styles from './Finish.module.scss'
import Button from '../../../UI/Button'
import Loader from '@/components/UI/Loader'
import useFilesList from '@/hooks/useFilesList'
import { isEmpty } from 'ramda'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Finish({ steps }) {
  const router = useRouter()
  const { data } = useFilesList()

  useEffect(() => {
    if (!isEmpty(data?.images)) {
      router.push('/images/dashboard')
      return
    }
  }, [data])

  return (
    <Stack position="relative" height="100vh" width="100%">
      <Image
        src="/images/dashboard-blur.svg"
        alt="Dashboard blur"
        layout="fill"
        objectFit="cover"
        quality={100}
        className={styles.imageBackground}
      />

      <Stack
        bgcolor="primary.400"
        border={1}
        borderColor="neutral.600"
        borderRadius={10}
        maxWidth="370px"
        padding={4}
        className={styles.modalContainer}
      >
        <Typography fontWeight="600" fontSize={20}>
          Awaiting image data
        </Typography>
        <Typography marginY={2} fontWeight="500" fontSize={16}>
          No data has been received yet.
        </Typography>
        <Typography textColor="neutral.400" fontWeight="400" fontSize={16}>
          Make sure that you have finished setting everything up so that we can
          load your dashboard.
        </Typography>

        <Stack marginY={4}>
          <Loader />
        </Stack>

        <Stack marginY={2}>
          <Button inverted onClick={steps.backStep} type="button">
            Back to setup
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
