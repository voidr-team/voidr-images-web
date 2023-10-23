import CardFile from '@/components/CardFile'
import MOCK_FILES from '@/mock/MOCK_FILES'
import { Stack, Typography } from '@mui/joy'

export default function FileList() {
  return (
    <Stack>
      <Typography level="h4">Latest processed files</Typography>

      <Stack
        maxWidth="1000px"
        width="100%"
        gap={3}
        direction="row"
        flexWrap="wrap"
        marginTop={2}
      >
        {MOCK_FILES.map((mock, index) => (
          <CardFile
            key={index}
            imageName={mock.imageName}
            imageSizeSaved={mock.imageSizeSaved}
            imageUrl={mock.imageUrl}
          />
        ))}
      </Stack>
    </Stack>
  )
}
