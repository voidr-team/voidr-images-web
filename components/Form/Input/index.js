import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Help from '@/components/UI/Help'
import styles from './Input.module.scss'
import cx from 'classnames'
import { isEmpty } from 'ramda'
import InputMask from 'react-input-mask'
import Icon from '@/components/UI/Icon'

const Input = ({
  name,
  rules,
  label,
  help: helpMessage,
  customClass,
  placeholder,
  textarea = false,
  defaultValue,
  mask,
  type = 'text',
  icon,
  isAtSocial,
}) => {
  const {
    register,
    formState: { errors },
    getFieldState,
    getValues,
  } = useFormContext()
  const fieldState = getFieldState(name)
  const maskDefaultValue = defaultValue || getValues(name)
  const fieldId = `ref_${name}`

  return (
    <div
      className={cx(
        styles.inputWrapper,
        customClass,
        {
          [styles.error]: !!fieldState.error,
          [styles.hasIcon]: !!icon,
          [styles.isAtSocial]: !!isAtSocial,
        },
        'form-input'
      )}
    >
      {label && (
        <label htmlFor={fieldId}>
          {label}
          {helpMessage && <Help message={helpMessage} />}
        </label>
      )}
      {icon && (
        <div className={styles.iconWrapper}>
          <Icon id={icon} />
        </div>
      )}
      {textarea ? (
        <textarea
          placeholder={placeholder}
          id={fieldId}
          defaultValue={defaultValue}
          {...register(name, rules)}
        />
      ) : mask ? (
        <InputMask
          mask={mask}
          type="text"
          placeholder={placeholder}
          id={fieldId}
          defaultValue={maskDefaultValue}
          {...register(name, rules)}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={fieldId}
          defaultValue={defaultValue}
          {...register(name, rules)}
        />
      )}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div className={styles.errorWrapper}>{message}</div>
        )}
      />
    </div>
  )
}

export default Input
