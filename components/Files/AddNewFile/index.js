import Uppy from '@uppy/core'
import AwsS3 from '@uppy/aws-s3'
import { DragDrop } from '@uppy/react'
import { useEffect, useMemo, useState } from 'react'
import styles from './AddNewFile.module.scss'
import http from '@/services/http'
import Loader from '@/components/UI/Loader'
import useAuth from '@/context/auth/useAuth'
import axios from 'axios'
import { last } from 'ramda'
import toastEz from '@/utils/toastEz'
import { useTranslation } from 'next-i18next'

const VOIDR_API_URL = process.env.NEXT_PUBLIC_VOIDR_API_URL

export default function AddNewFile() {
  const { t } = useTranslation(['translations', 'common'])
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()

  const uppy = useMemo(
    () =>
      new Uppy({
        meta: { type: 'file' },
        restrictions: {
          maxTotalFileSize: 20000000,
          allowedFileTypes: [
            '.png',
            '.jpeg',
            '.jpg',
            '.webp',
            '.gif',
            '.tiff',
            '.avif',
          ],
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
      getUploadParameters: async (file) => {
        setIsLoading(true)
        const response = await http.post(`/images/upload`, {
          file: file.name,
          contentType: file.type,
        })
        return {
          url: response.data.url,
          method: 'PUT',
          headers: {
            'Content-Type': file.type,
          },
        }
      },
    })

    uppy.on('complete', (data) => {
      const filename = last(data?.successful?.[0]?.uploadURL?.split('/'))
      const remote = `${VOIDR_API_URL}/v1/images/raw/${user.currentProject.name}/${filename}`
      const imgUrl = `${VOIDR_API_URL}/v1/images/${user.currentProject.name}/compress:80/convert:webp/fetch/${remote}`
      if (filename) {
        axios.get(imgUrl).then(() => {
          setIsLoading(false)
          const customEvent = new CustomEvent('images:fetch')
          document.dispatchEvent(customEvent)
          toastEz.success(t('add_new_file.toast.uploaded'))
        })
      } else {
        setIsLoading(false)
      }
      uppy.removeFile(data?.successful?.[0]?.id)
    })

    return () => uppy.close({ reason: 'unmount' })
  }, [uppy])

  return (
    <div className={styles.addNewFile}>
      <h3>{t('add_new_file.title')}</h3>

      <p>{t('add_new_file.accepted_formats')}</p>
      <div className={styles.dropWrapper}>
        {isLoading && (
          <>
            <div className={styles.overlay}></div>
            <Loader className={styles.loader} />
          </>
        )}

        <DragDrop className={styles.dragDrop} uppy={uppy} />
      </div>
    </div>
  )
}
