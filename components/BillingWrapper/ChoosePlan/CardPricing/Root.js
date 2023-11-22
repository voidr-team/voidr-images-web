import styles from './CardPricing.module.scss'

export default function Root({ children }) {
  return <article className={styles.rootWrapper}>{children}</article>
}
