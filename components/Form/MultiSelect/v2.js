import Select from 'react-dropdown-select'
import cx from 'classnames'
import styles from './MultiSelectV2.module.scss'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import Icon from '@/components/UI/Icon'
import Help from '@/components/UI/Help'
import { isEmpty } from 'ramda'
import { ErrorMessage } from '@hookform/error-message'

const DropdownItem = ({ item, methods }) => (
  <div
    className={cx({
      'dropdown-select-item': true,
      'dropdown-select-item-selected': methods.isSelected(item),
    })}
    onClick={() => methods.addItem(item)}
  >
    <div className="content">{item.label}</div>
  </div>
)

const getLengthValidations = (rules) => {
  let validates = { ...rules.validate }
  if (rules.maxLength) {
    validates.maxLength = (data) =>
      data?.length <= rules.maxLength.value || rules.maxLength.message
  }
  if (rules.minLength) {
    validates.minLength = (data) =>
      data?.length >= rules.minLength.value || rules.minLength.message
  }
  return validates
}

const MultiSelect = ({
  defaultValue: defaultValueFromProps,
  name,
  options,
  help: helpMessage,
  iconId,
  label = 'Selecione uma opção',
  placeholder = '',
  customClass,
  isLoading,
  rules,
  theme = 'bordered',
}) => {
  const {
    control,
    getValues,
    formState: { errors },
    getFieldState,
  } = useFormContext()
  const fieldState = getFieldState(name)
  const defaultValue = getValues(name) || defaultValueFromProps
  const validations = getLengthValidations(rules)
  return (
    <div
      className={cx(
        styles.dropdownWrapper,
        customClass,
        {
          [styles.error]: !!fieldState.error,
          [styles.noIcon]: !iconId,
        },
        styles[theme]
      )}
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
        defaultValue={defaultValue}
        rules={{ ...rules, validate: validations }}
        render={({ field: { onChange, onBlur, ref } }) => (
          <div className={styles.selectWrapper} ref={ref}>
            {iconId && <Icon customClass={styles.icon} id={iconId} />}
            <Select
              className={styles.select}
              loading={isLoading}
              disabled={isLoading}
              searchable
              multi
              closeOnSelect={true}
              options={options || []}
              values={defaultValue}
              itemRenderer={DropdownItem}
              placeholder={placeholder}
              onChange={(data) => onChange(data) && onBlur()}
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

export default MultiSelect
