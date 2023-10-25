import ErrorMessage from '../../UI/ErrorMessage'
import { FormControl, Radio as RadioProvider } from '@mui/joy'
import { useFormContext } from 'react-hook-form'

export default function Radio({ name, rules = {}, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl>
      <RadioProvider
        color="primary"
        variant="solid"
        {...register(name, rules)}
        {...props}
      />
      <ErrorMessage name={name} errors={errors} />
    </FormControl>
  )
}
