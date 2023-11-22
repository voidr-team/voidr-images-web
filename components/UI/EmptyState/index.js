import styles from './EmptyState.module.scss'
import PropTypes from 'prop-types'

function EmptyState({ content }) {
  return (
    <section className={styles.container}>
      <p>{content}</p>
    </section>
  )
}

EmptyState.propTypes = {
  content: PropTypes.string,
}

export default EmptyState
