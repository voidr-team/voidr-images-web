import styles from './CardPricing.module.scss'

export default function Price({ children }) {
  return <div className={styles.priceWrapper}>{children}</div>
}
