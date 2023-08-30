import cx from 'classnames'
import InputMask from 'react-input-mask'
import pipe from 'ramda/src/pipe'
import pathOr from 'ramda/src/pathOr'
import store from '../../../utils/store'
import styles, {
  fieldWrapper,
  fieldIsFocused,
  selectTouched,
  errorWrapper,
  hasError,
  checkbox,
} from './FormField.module.scss'
import { useState } from 'react'

function FormField({
  dropdown,
  label,
  name,
  type = 'text',
  options,
  placeholder,
  isRequired,
  validation,
  inputProps = {},
  globalStore,
  mask,
  formatter = v => v,
  onFieldChange = () => null,
  CustomInput,
  customClass,
  customError,
}) {
  const [validationError, setValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const fieldId = `ref_${name}`

  const getValidation = value => {
    return validation
      ? pipe(pathOr(false, ['error', 'details', '0', 'message']))(
          validation.validate(formatter(value))
        )
      : false
  }

  const onFocus = () => setIsFocused(true)
  const onBlur = e => {
    setIsFocused(false)

    if (
      (!isRequired && e.target.value === null) ||
      e.target.value === undefined ||
      e.target.value === ''
    ) {
      return
    }

    const value = type === 'checkbox' ? e.target.checked : e.target.value
    const fieldIsInvalid = getValidation(value)
    if (fieldIsInvalid) {
      setValidationError(fieldIsInvalid)
    } else {
      setValidationError(false)
    }
  }
  const onChange = e => {
    setIsTouched(true)
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    const fieldIsInvalid = getValidation(value)

    if (fieldIsInvalid && !isFocused) {
      setValidationError(fieldIsInvalid)
    } else {
      setValidationError(false)
    }

    if (globalStore) {
      store[globalStore][name] = value
    }

    onFieldChange({
      value,
      valid: !fieldIsInvalid,
    })
  }

  const baseProps = {
    required: isRequired,
    onFocus: onFocus,
    onChange: onChange,
    onBlur: onBlur,
    name: name,
    id: fieldId,
    autoComplete: 'off',
  }
  return (
    <div
      data-field={`field_${name}`}
      className={cx(
        {
          [hasError]: validationError || customError,
          [fieldWrapper]: true,
          [fieldIsFocused]: isFocused,
          [checkbox]: type === 'checkbox',
          [styles.radio]: type === 'radio',
        },
        customClass
      )}
    >
      {type === 'checkbox' ? (
        <label htmlFor={fieldId}>
          <input
            {...baseProps}
            type={type}
            placeholder={placeholder}
            {...inputProps}
          />
          {label}
        </label>
      ) : (
        <label htmlFor={fieldId}>{label}</label>
      )}

      {CustomInput ? (
        <CustomInput {...{ ...baseProps, ...inputProps }} />
      ) : dropdown ? (
        <select
          className={cx({
            [hasError]: validationError || customError,
            [selectTouched]: isTouched,
          })}
          {...baseProps}
          {...inputProps}
        >
          <>
            {placeholder && (
              <option disabled selected value="">
                {placeholder}
              </option>
            )}
            {options.map(({ value, label }, index) => (
              <option key={`${name}_${index}_${value}`} value={value}>
                {label}
              </option>
            ))}
          </>
        </select>
      ) : (
        <>
          {mask ? (
            <InputMask mask={mask} {...baseProps}>
              {maskProps => (
                <input
                  type={type}
                  {...maskProps}
                  placeholder={placeholder}
                  {...inputProps}
                />
              )}
            </InputMask>
          ) : type === 'textarea' ? (
            <textarea
              {...baseProps}
              placeholder={placeholder}
              {...inputProps}
            ></textarea>
          ) : type === 'radio' ? (
            <div className={styles.radioGroup}>
              {options.map(option => (
                <div
                  className={styles.radioWrapper}
                  key={`${fieldId}_${option.value}`}
                >
                  <input
                    {...baseProps}
                    type={type}
                    value={option.value}
                    placeholder={placeholder}
                    {...inputProps}
                    id={`${fieldId}_${option.value}`}
                    className={styles.radioInput}
                  />
                  <label
                    className={styles.radioButton}
                    htmlFor={`${fieldId}_${option.value}`}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          ) : type !== 'checkbox' ? (
            <input
              {...baseProps}
              type={type}
              placeholder={placeholder}
              {...inputProps}
            />
          ) : null}
        </>
      )}
      {(validationError || customError) && (
        <div className={errorWrapper}>{validationError || customError}</div>
      )}
    </div>
  )
}

export default FormField
