import CardFile from '@/components/CardFile'
import useFilesList from '@/hooks/useFilesList'
import { Stack, Typography } from '@mui/joy'
import Pagination from '@/components/UI/Pagination'
import Loader from '@/components/UI/Loader'

export default function FileList({ setIsDialogOpen, setCurrentImage }) {
  const { data, paginate, isLoading } = useFilesList()

  return (
    <Stack>
      <Typography level="h4">Latest processed files</Typography>

      <Stack
        maxWidth="900px"
        width="100%"
        gap={3}
        direction="row"
        flexWrap="wrap"
        marginTop={4}
      >
        {isLoading ? (
          <Loader />
        ) : (
          data?.images?.map((image, index) => (
            <CardFile
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
      </Stack>
      <Pagination onPageChange={paginate} pageCount={data?.pages} />
    </Stack>
  )
}
