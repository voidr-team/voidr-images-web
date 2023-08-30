import Input from '@/components/Form/Input'

const CepField = ({ name, label = 'CEP' }) => {
  return (
    <Input
      name={name}
      label={label}
      mask={`99999-999`}
      rules={{
        required: 'Campo obrigatório',
        pattern: {
          value: /[0-9]{5}-[0-9]{3}/,
          message: 'CEP inválido',
        },
      }}
    />
  )
}

export default CepField
