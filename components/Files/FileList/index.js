import CardFile from '@/components/CardFile'
import useFilesList from '@/hooks/useFilesList'
import { Stack, Typography } from '@mui/joy'
import Pagination from '@/components/UI/Pagination'
import Loader from '@/components/UI/Loader'
import styles from './FileList.module.scss'
import { isEmpty } from 'ramda'
import EmptyStateProcessedFiles from '@/components/EmptyStateProcessedFiles'
import { useTranslation } from 'next-i18next'

export default function FileList({ setIsDialogOpen, setCurrentImage }) {
  const { data, paginate, isLoading, page } = useFilesList({ limit: 20 })
  const { t } = useTranslation(['translations', 'common'])

  return (
    <Stack>
      <Typography level="h4">{t('file_list.title')}</Typography>

      <div className={styles.cardFileList}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!isEmpty(data?.images) ? (
              data?.images?.map((image, index) => (
                <CardFile
                  className={styles.cardFileItem}
                  onClick={() => {
                    setCurrentImage(image)
                    setIsDialogOpen((prevState) => !prevState)
                  }}
                  imageName={`${image?.name}.${image?.metadata?.format}`}
                  imageSizeSaved={
                    image?.rawMetadata?.size - image?.metadata?.size
                  }
                  imageUrl={image?.originUrl}
                  key={`${index}_${image?.name}`}
                />
              ))
            ) : (
              <EmptyStateProcessedFiles />
            )}
          </>
        )}
      </div>

      {!isLoading && !isEmpty(data?.images) ? (
        <Pagination
          onPageChange={paginate}
          pageCount={data?.pages}
          initialPage={page}
        />
      ) : null}
    </Stack>
  )
}
