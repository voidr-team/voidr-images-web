import { Stack, Typography } from '@mui/joy'
import PropTypes from 'prop-types'

function EmptyState({ content }) {
  return (
    <Stack width="100" textAlign="center" paddingY={3}>
      <Typography level="title-md">{content}</Typography>
    </Stack>
  )
}

EmptyState.propTypes = {
  content: PropTypes.string,
}

export default EmptyState
