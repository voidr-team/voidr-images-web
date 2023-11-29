import Input from '@/components/Form/Input'
import { useTranslation } from 'next-i18next'

const CepField = ({ name, label = 'CEP' }) => {
  const { t } = useTranslation(['common'])

  return (
    <Input
      name={name}
      label={label}
      mask={`99999-999`}
      rules={{
        required: t('common:form_errors.required_field'),
        pattern: {
          value: /[0-9]{5}-[0-9]{3}/,
          message: t('common:form_errors.invalid_cep'),
        },
      }}
    />
  )
}

export default CepField
