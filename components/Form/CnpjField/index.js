import Input from '@/components/Form/Input'
import { cnpj } from 'cpf-cnpj-validator'
import { useTranslation } from 'next-i18next'

const CnpjField = ({ name, label = 'CNPJ' }) => {
  const { t } = useTranslation(['common'])

  return (
    <Input
      name={name}
      label={label}
      mask={`99.999.999/9999-99`}
      rules={{
        required: t('common:form_errors.required_field'),
        validate: {
          isCnpj: (data) =>
            cnpj.isValid(data) || t('common:form_errors.invalid_cnpj'),
        },
      }}
    />
  )
}

export default CnpjField
