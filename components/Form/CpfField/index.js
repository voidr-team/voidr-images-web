import Input from '@/components/Form/Input'
import { cpf } from 'cpf-cnpj-validator'
import { useTranslation } from 'next-i18next'

const CpfField = ({ name, label = 'CPF' }) => {
  const { t } = useTranslation(['common'])

  return (
    <Input
      name={name}
      label={label}
      mask={`999.999.999-99`}
      rules={{
        required: t('common:form_errors.required_field'),
        validate: {
          isCpf: (data) =>
            cpf.isValid(data) || t('common:form_errors.invalid_cpf'),
        },
      }}
    />
  )
}

export default CpfField
