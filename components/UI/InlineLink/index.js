import styles from './InlineLink.module.scss'
import { ExternalLink as Icon } from 'lucide-react'

const InlineLink = ({ onClick, href, Tag = 'a', children, target, rel }) => {
  return (
    <Tag
      className={styles.inlineLink}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
    >
      <span>{children}</span> <Icon />
    </Tag>
  )
}

export default InlineLink
