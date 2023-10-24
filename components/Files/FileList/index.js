import CardFile from '@/components/CardFile'
import MOCK_FILES from '@/mock/MOCK_FILES'
import { Grid, Stack, Typography } from '@mui/joy'

export default function FileList() {
  return (
    <Stack>
      <Typography level="h4">Latest processed files</Typography>

      <Grid
        container
        spacing={{ xs: 5 }}
        rows={3}
        columns={5}
        sx={{ flexGrow: 1 }}
        marginTop={2}
      >
        {MOCK_FILES.map((mock, index) => (
          <Grid key={index}>
            <CardFile
              imageName={mock.imageName}
              imageSizeSaved={mock.imageSizeSaved}
              imageUrl={mock.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}
