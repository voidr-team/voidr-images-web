import CardFile from '@/components/CardFile'
import Loader from '@/components/UI/Loader'
import useFilesList from '@/hooks/useFilesList'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { isEmpty, take } from 'ramda'
import styles from './LastProcessedFiles.module.scss'
import EmptyStateProcessedFiles from './EmptyStateProcessedFiles'
import Widget from '@/components/UI/Widget'

export default function LastProcessedFiles({
  setIsDialogOpen,
  setCurrentImage,
}) {
  const { data, isLoading } = useFilesList({ limit: 10 })

  return (
    <Widget title="Latest processed files">
      <div className={styles.imagesWrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {isEmpty(data?.images) ? (
              <EmptyStateProcessedFiles />
            ) : (
              <div className={styles.containerImage}>
                {data?.images?.map((image, index) => (
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
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {!isEmpty(data?.images) ? (
        <Link href="/images/files">
          <div className={styles.viewMore}>
            <span>View more</span>
            <ChevronRight color="#fff" />
          </div>
        </Link>
      ) : null}
    </Widget>
  )
}
