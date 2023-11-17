import styles from './CardPricing.module.scss'

export default function Header({ title, benefit }) {
  return (
    <header className={styles.headerWrapper}>
      <h1>{title}</h1>

      <p>{benefit}</p>
    </header>
  )
}
