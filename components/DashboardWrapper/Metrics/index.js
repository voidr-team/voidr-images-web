import Widget from '@/components/UI/Widget'
import styles from './Metrics.module.scss'
import { Typography } from '@mui/joy'
import formatBytes from '@/utils/formatBytes'

export default function Metrics({ usage, savedData }) {
  return (
    <Widget title="Metrics">
      <div className={styles.contentWrapper}>
        <article>
          <Typography fontWeight="900" fontSize={46} level="title-lg">
            {formatBytes(savedData)}
          </Typography>
          <Typography fontSize={16} level="body-xs">
            Saved data
          </Typography>
        </article>

        <article>
          <Typography fontWeight="900" fontSize={46} level="title-lg">
            {usage}
          </Typography>
          <Typography fontSize={16} level="body-xs">
            Total active images
          </Typography>
        </article>
      </div>
    </Widget>
  )
}
