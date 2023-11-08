import { Lightbulb, TrendingUp } from 'lucide-react'
import styles from './Insights.module.scss'
import Widget from '@/components/UI/Widget'

export default function Insights() {
  return (
    <Widget title="Insights">
      <article className={styles.helpBox}>
        <div className={styles.iconWrapper}>
          <TrendingUp />
        </div>

        <p>
          {`Use the "convert:webp" and "compress:80" option to load images
            specifically for slow connections.`}
        </p>
      </article>

      <article className={styles.helpBox}>
        <div className={styles.iconWrapper}>
          <Lightbulb />
        </div>

        <p>
          {`Use "crop:400x,position:attention" to crop the image in areas that
            contain the presence of faces.`}
        </p>
      </article>
    </Widget>
  )
}
