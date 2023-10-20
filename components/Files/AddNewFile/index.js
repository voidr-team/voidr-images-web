import { Stack } from '@mui/joy'
import Uppy from '@uppy/core'
import AwsS3 from '@uppy/aws-s3'
import { DragDrop } from '@uppy/react'
import { useEffect, useMemo } from 'react'
import styles from './AddNewFile.module.scss'

export default function AddNewFile() {
  const uppy = useMemo(
    () =>
      new Uppy({
        meta: { type: 'file' },
        restrictions: {
          maxTotalFileSize: 10000000,
          maxNumberOfFiles: 1,
        },
        autoProceed: true,
      }),
    []
  )

  useEffect(() => {
    uppy.use(AwsS3, {
      limit: 1,
      timeout: 60000,
      getUploadParameters: () => {
        return {
          method: 'PUT',
          url: 'https://url.com',
          fields: {},
        }
      },
    })

    return () => uppy.close({ reason: 'unmount' })
  }, [uppy])

  return (
    <Stack marginTop={3} className={styles.addNewFile}>
      <DragDrop className={styles.dragDrop} uppy={uppy} />
    </Stack>
  )
}
