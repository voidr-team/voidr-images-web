import styles from './ExternalLink.module.scss'
import Icon from '@/components/UI/Icon'

const ExternalLink = ({
  onClick,
  href,
  Tag = 'a',
  children,
  target,
  rel,
  icon = 'Info_Icon',
}) => {
  return (
    <Tag
      className={styles.externalLink}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
    >
      <div>
        <Icon id={icon} width={24} height={24} />
        {children}
      </div>
    </Tag>
  )
}

export default ExternalLink
