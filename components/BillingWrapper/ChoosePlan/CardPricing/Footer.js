import styles from './CardPricing.module.scss'

export default function Footer({ children }) {
  return <div className={styles.footerWrapper}>{children}</div>
}
