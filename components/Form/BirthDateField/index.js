import Input from '@/components/Form/Input'
import { isDateAbove18, isDateValid } from '@/utils/dates'

const BirthDateField = ({ name, label = 'Data de Nascimento' }) => {
  return (
    <Input
      name={name}
      label={label}
      mask={`99/99/9999`}
      rules={{
        required: 'Campo obrigatório',
        validate: {
          isDate: data => isDateValid(data) || 'Data inválida',
          isAbove18: data =>
            isDateAbove18(data) || 'Você precisa ter pelo menos 18 anos',
        },
        pattern: {
          value: /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/,
          message: 'Data inválida',
        },
        minLength: {
          value: 10,
          message: 'Data inválida',
        },
      }}
    />
  )
}
export default BirthDateField
