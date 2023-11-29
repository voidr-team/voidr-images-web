import Input from '@/components/Form/Input'
import { isDateAbove18, isDateValid } from '@/utils/dates'
import { useTranslation } from 'next-i18next'

const BirthDateField = ({ name, label = 'Data de Nascimento' }) => {
  const { t } = useTranslation(['common'])

  return (
    <Input
      name={name}
      label={t(label)}
      mask={`99/99/9999`}
      rules={{
        required: t('common:form_errors.required_field'),
        validate: {
          isDate: (data) =>
            isDateValid(data) || t('common:form_errors.invalid_date'),
          isAbove18: (data) =>
            isDateAbove18(data) || t('commom:form_errors.min_age', { age: 18 }),
        },
        pattern: {
          value: /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
          message: t('common:form_errors.invalid_date'),
        },
        minLength: {
          value: 10,
          message: t('common:form_errors.invalid_date'),
        },
      }}
    />
  )
}
export default BirthDateField
