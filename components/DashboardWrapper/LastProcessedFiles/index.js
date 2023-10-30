import CardFile from '@/components/CardFile'
import MOCK_FILES from '@/mock/MOCK_FILES'
import { Stack, Typography } from '@mui/joy'

export default function LastProcessedFiles() {
  return (
    <Stack
      maxWidth="fit-content"
      padding={2.8}
      borderRadius={6}
      border={1}
      borderColor="neutral.600"
    >
      <Typography level="h4">Latest processed files</Typography>

      <Stack
        maxWidth="900px"
        width="100%"
        gap={3}
        direction="row"
        flexWrap="wrap"
        marginTop={4}
      >
        {MOCK_FILES.slice(0, 8).map((item, index) => (
          <CardFile
            key={index}
            imageName={item.imageName}
            imageSizeSaved={item.imageSizeSaved}
            imageUrl={item.imageUrl}
          />
        ))}
      </Stack>
    </Stack>
  )
}
