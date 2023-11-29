import Input from '@/components/Form/Input'
import { useTranslation } from 'next-i18next'

const EmailField = ({ name, label = 'Email', placeholder, defaultValue }) => {
  const { t } = useTranslation(['common'])

  return (
    <Input
      name={name}
      type="email"
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      rules={{
        required: t('common:form_errors.required_field'),
        pattern: {
          value: /^(.+)@(.+)$/,
          message: t('common:form_errors.invalid_mail'),
        },
        minLength: {
          value: 5,
          message: t('common:form_errors.min_length', { length: 5 }),
        },
      }}
    />
  )
}

export default EmailField
