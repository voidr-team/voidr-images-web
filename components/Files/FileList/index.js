import CardFile from '@/components/CardFile'
import useFilesList from '@/hooks/useFilesList'
import { Stack, Typography } from '@mui/joy'
import Pagination from '@/components/UI/Pagination'
import Loader from '@/components/UI/Loader'
import styles from './FileList.module.scss'

export default function FileList({ setIsDialogOpen, setCurrentImage }) {
  const { data, paginate, isLoading } = useFilesList({ limit: 20 })

  return (
    <Stack>
      <Typography level="h4">Latest processed files</Typography>

      <div className={styles.cardFileList}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.images?.map((image, index) => (
            <CardFile
              className={styles.cardFileItem}
              onClick={() => {
                setCurrentImage(image)
                setIsDialogOpen((prevState) => !prevState)
              }}
              imageName={`${image?.name}.${image?.metadata?.format}`}
              imageSizeSaved={image?.rawMetadata?.size - image?.metadata?.size}
              imageUrl={image?.originUrl}
              key={`${index}_${image?.name}`}
            />
          ))
        )}
      </div>

      {!isLoading ? (
        <Pagination onPageChange={paginate} pageCount={data?.pages} />
      ) : null}
    </Stack>
  )
}
