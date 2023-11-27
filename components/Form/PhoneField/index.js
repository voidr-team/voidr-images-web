import Input from '@/components/Form/Input'
import { useTranslation } from 'next-i18next'

const PhoneField = ({
  name,
  label = 'Celular',
  placeholder,
  required = true,
  icon,
  rules = {},
}) => {
  const { t } = useTranslation(['common'])

  return (
    <Input
      name={name}
      icon={icon}
      label={label}
      placeholder={placeholder}
      mask={`+55 (99) 99999-9999`}
      rules={{
        required: required ? t('common:form_errors.required_field') : undefined,
        pattern: {
          value: /\+[0-9]{2}\s\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}/,
          message: t('common:form_errors.invalid_phone'),
        },
        minLength: {
          value: 10,
          message: t('common:form_errors.min_length', { length: 10 }),
        },
        ...rules,
      }}
    />
  )
}

export default PhoneField
