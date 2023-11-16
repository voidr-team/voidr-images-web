import ErrorMessage from '../../UI/ErrorMessage'
import {
  FormControl,
  FormLabel,
  Input as InputProvider,
  Typography,
} from '@mui/joy'
import { useFormContext } from 'react-hook-form'
import Label from './Label'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function Input({ name, rules = {}, label, ...props }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const [parentRef] = useAutoAnimate()

  return (
    <FormControl sx={{ width: '100%' }} ref={parentRef}>
      {label && <Label>{label}</Label>}
      <InputProvider
        sx={{
          paddingBlock: '10px',
          paddingInline: '15px',
          backgroundColor: `var(--joy-palette-primary-400)`,
          border: '1px solid var(--joy-palette-neutral-600)',
          '--Input-focusedThickness': '0rem',
          ':hover': {
            borderColor: 'var(--joy-palette-helper-500)',
          },
          '&:focus-within': {
            borderColor: 'var(--joy-palette-helper-500)',
          },
        }}
        {...register(name, rules)}
        {...props}
      />
      <ErrorMessage name={name} errors={errors} />
    </FormControl>
  )
}

export default Input
