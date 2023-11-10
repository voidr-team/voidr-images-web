import styles from './ExternalLink.module.scss'
import { ExternalLink as Icon } from 'lucide-react'

const ExternalLink = ({ onClick, href, Tag = 'a', children, target, rel }) => {
  return (
    <Tag
      className={styles.externalLink}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
    >
      <span>{children}</span> <Icon />
    </Tag>
  )
}

export default ExternalLink
