import Input from '@/components/Form/Input'
import { cnpj } from 'cpf-cnpj-validator'

const CnpjField = ({ name, label = 'CNPJ' }) => {
  return (
    <Input
      name={name}
      label={label}
      mask={`99.999.999/9999-99`}
      rules={{
        required: 'Campo obrigatório',
        validate: {
          isCnpj: data => cnpj.isValid(data) || 'CNPJ inválido',
        },
      }}
    />
  )
}

export default CnpjField
