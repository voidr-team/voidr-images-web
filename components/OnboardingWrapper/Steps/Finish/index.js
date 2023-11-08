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
  const { data, isLoading } = useFilesList({ limit: 2 })

  // useEffect(() => {
  //   if (!isEmpty(data?.images)) {
  //     // router.push('/images/dashboard')
  //     return
  //   }
  // }, [data])

  useEffect(() => {
    if (!isLoading && !isEmpty(data?.images)) {
      return router.push('/images/dashboard')
    }
  }, [data, isLoading])

  return (
    <Stack position="relative" className={styles.finishWrapper}>
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
