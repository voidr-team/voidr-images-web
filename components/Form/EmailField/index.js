import Input from '@/components/Form/Input'
const EmailField = ({ name, label = 'Email', placeholder, defaultValue }) => {
  return (
    <Input
      name={name}
      type="email"
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      rules={{
        required: 'Campo obrigatório',
        pattern: {
          value: /^(.+)@(.+)$/,
          message: 'Email inválido',
        },
        minLength: {
          value: 5,
          message: 'Campo deve conter no mínimo 5 caracteres',
        },
      }}
    />
  )
}

export default EmailField
