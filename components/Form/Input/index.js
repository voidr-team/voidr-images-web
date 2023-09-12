import ErrorMessage from '@/components/UI/ErrorMessage'
import { FormControl, FormLabel, Input as InputProvider } from '@mui/joy'
import { useFormContext } from 'react-hook-form'

function Input({ name, rules = {}, label, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputProvider {...register(name, rules)} {...props} />
      <ErrorMessage name={name} errors={errors} />
    </FormControl>
  )
}

export default Input
