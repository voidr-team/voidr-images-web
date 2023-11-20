import { FormLabel } from '@mui/joy'
import styles from './Label.module.scss'

const Label = ({ children }) => (
  <FormLabel sx={{ marginBottom: '5px' }}>
    <label className={styles.label}>{children}</label>
  </FormLabel>
)

export default Label
