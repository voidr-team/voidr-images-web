import CardFile from '@/components/CardFile'
import useFilesList from '@/hooks/useFilesList'
import { Grid, Stack, Typography } from '@mui/joy'
import Pagination from '@/components/UI/Pagination'
import Loader from '@/components/UI/Loader'

export default function FileList({ setIsDialogOpen, setCurrentImage }) {
  const { data, paginate, isLoading } = useFilesList()

  return (
    <Stack>
      <Typography level="h4">Latest processed files</Typography>

      <Grid
        container
        maxWidth="1000px"
        spacing={{ xs: 5 }}
        rows={3}
        columns={5}
        sx={{ flexGrow: 1 }}
        marginTop={2}
      >
        {isLoading ? (
          <Loader />
        ) : (
          data?.images?.map((image) => {
            return (
              <Grid
                onClick={() => {
                  setCurrentImage(image)
                  setIsDialogOpen((prevState) => !prevState)
                }}
                sx={{ cursor: 'pointer' }}
                key={image?._id ?? image?.id}
              >
                <CardFile
                  imageName={`${image?.name}.${image?.metadata?.format}`}
                  imageSizeSaved={
                    image?.rawMetadata?.size - image?.metadata?.size
                  }
                  imageUrl={image?.remote}
                />
              </Grid>
            )
          })
        )}
      </Grid>

      <Pagination onPageChange={paginate} pageCount={data?.pages} />
    </Stack>
  )
}
