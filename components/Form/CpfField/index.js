import Input from '@/components/Form/Input'
import { cpf } from 'cpf-cnpj-validator'

const CpfField = ({ name, label = 'CPF' }) => {
  return (
    <Input
      name={name}
      label={label}
      mask={`999.999.999-99`}
      rules={{
        required: 'Campo obrigatório',
        validate: {
          isCpf: data => cpf.isValid(data) || 'CPF inválido',
        },
      }}
    />
  )
}

export default CpfField
