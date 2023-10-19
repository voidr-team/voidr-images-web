import Icon from '@/components/UI/Icon'
import styles from './RadioButton.module.scss'
import cx from 'classnames'
import { useFormContext } from 'react-hook-form'

const RadioButton = ({
  className,
  label,
  icon,
  value,
  name,
  theme,
  required = true,
}) => {
  const { register } = useFormContext()
  return (
    <label
      className={cx(styles.radioButton, className, {
        [styles.noIcon]: !icon,
        [styles.themeRounded]: theme === 'rounded',
      })}
    >
      <input type="radio" value={value} {...register(name, { required })} />
      <div className={styles.wrapper}>
        {icon ? (
          <div className={styles.iconWrapper}>
            <Icon id={icon} />
          </div>
        ) : (
          <div className={styles.fakeInput}>
            <Icon id="check" />
          </div>
        )}
        <span>{label}</span>
      </div>
    </label>
  )
}

export default RadioButton
