import ErrorMessage from '../../UI/ErrorMessage'
import {
  FormControl,
  FormLabel,
  Input as InputProvider,
  Typography,
} from '@mui/joy'
import { useFormContext } from 'react-hook-form'
import Label from './Label'

function Input({ name, rules = {}, label, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FormControl sx={{ width: '100%' }}>
      <Label>{label}</Label>
      <InputProvider
        sx={() => ({
          paddingBlock: '10px',
          paddingInline: '15px',
          backgroundColor: `#1C1E30`,
          border: '0.5px solid white',
          '--Input-focusedThickness': '0rem',
        })}
        {...register(name, rules)}
        {...props}
      />
      <ErrorMessage name={name} errors={errors} />
    </FormControl>
  )
}

export default Input
