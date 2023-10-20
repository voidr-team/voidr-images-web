import { Stack, Typography } from '@mui/joy'
import AddNewFile from './AddNewFile'
import FileList from './FileList'

export default function FilesList() {
  return (
    <Stack paddingX={3} marginY={4}>
      <Typography fontWeight="600" level="h4">
        Files &gt; Upload
      </Typography>

      <Stack gap={5}>
        <AddNewFile />
        <FileList />
      </Stack>
    </Stack>
  )
}
