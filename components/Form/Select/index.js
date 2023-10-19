import ReactDropdownSelect from 'react-dropdown-select'
import cx from 'classnames'
import styles from './Select.module.scss'
import { Controller, useFormContext } from 'react-hook-form'
import Icon from '@/components/UI/Icon'
import Help from '@/components/UI/Help'
import { ErrorMessage } from '@hookform/error-message'
import takeOptionFromValue from '@/utils/form/takeOptionFromValue'
import { useEffect } from 'react'

const getDefaultValue = ({
  name,
  defaultValueFromProps,
  options,
  getValues,
}) => {
  const values = getValues(name) || defaultValueFromProps
  if (!Array.isArray(values)) return takeOptionFromValue(options, values)
  return values
}

const Select = ({
  defaultValue: defaultValueFromProps,
  name,
  options,
  help: helpMessage,
  iconId,
  label = 'Selecione uma opção',
  placeholder = '',
  className,
  isLoading,
  rules,
}) => {
  const {
    control,
    getValues,
    formState: { errors },
    getFieldState,
    setValue,
  } = useFormContext()
  const fieldState = getFieldState(name)
  const defaultValue = getDefaultValue({
    name,
    defaultValueFromProps,
    options,
    getValues,
  })

  useEffect(() => {
    if (!getValues(name) && defaultValue) {
      //wait first render before setting default value
      setImmediate(() => setValue(name, defaultValue?.[0]?.value))
    }
  }, [])
  return (
    <div
      className={cx(styles.inputWrapper, className, {
        [styles.error]: !!fieldState.error,
      })}
    >
      {label && (
        <label className={styles.label}>
          {label}
          {helpMessage && <Help message={helpMessage} />}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, ref } }) => (
          <div className={styles.selectWrapper} ref={ref}>
            {iconId && <Icon className={styles.icon} id={iconId} />}
            <ReactDropdownSelect
              className={styles.select}
              searchable={false}
              loading={isLoading}
              disabled={isLoading}
              options={options || []}
              values={defaultValue}
              placeholder={placeholder}
              onChange={(data) => onChange(data?.[0]?.value) && onBlur()}
            />
          </div>
        )}
      />
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

export default Select
