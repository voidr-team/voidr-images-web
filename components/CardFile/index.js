import styles from './CardFile.module.scss'
import getImageSource from '@/utils/getImageSource'
import formatBytes from '@/utils/formatBytes'
import cn from 'classnames'
import { useTranslation } from 'next-i18next'

export default function CardFile({
  imageUrl,
  imageName,
  imageSizeSaved,
  onClick,
  className,
}) {
  const { t } = useTranslation(['translations', 'common'])
  return (
    <figure
      className={cn(styles.cardFile, className)}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <img src={getImageSource(imageUrl)} alt={imageName} height={150} />
      <div className={styles.content}>
        <p className={styles.imageName}>{imageName}</p>
        <span>
          {formatBytes(imageSizeSaved)} {t('common:saved')}
        </span>
      </div>
    </figure>
  )
}
