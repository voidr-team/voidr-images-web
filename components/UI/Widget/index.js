import styles from './Widget.module.scss'
import cn from 'classnames'

export default function Widget({ title, children, ...props }) {
  return (
    <div className={cn(styles.widget, props?.className)} {...props}>
      <h4>{title}</h4>
      {children}
    </div>
  )
}
