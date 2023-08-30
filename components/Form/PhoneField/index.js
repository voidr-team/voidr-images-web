import Input from '@/components/Form/Input'

const PhoneField = ({
  name,
  label = 'Celular',
  placeholder,
  required = true,
  icon,
  rules = {},
}) => {
  return (
    <Input
      name={name}
      icon={icon}
      label={label}
      placeholder={placeholder}
      mask={`+55 (99) 99999-9999`}
      rules={{
        required: required ? 'Campo obrigatório' : undefined,
        pattern: {
          value: /\+[0-9]{2}\s\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}/,
          message: 'Celular inválido',
        },
        minLength: {
          value: 10,
          message: 'Campo deve conter no mínimo 10 caracteres',
        },
        ...rules,
      }}
    />
  )
}

export default PhoneField
