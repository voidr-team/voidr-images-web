import {
  FormControl,
  FormLabel,
  Autocomplete as AutocompleteProvider,
  CircularProgress,
} from '@mui/joy'
import { useFormContext, Controller } from 'react-hook-form'
import Label from '../Input/Label'

function Autocomplete({
  label,
  name,
  options,
  defaultValue,
  multiple = false,
  id,
  isLoading,
  placeholder,
}) {
  const { control } = useFormContext()

  return (
    <FormControl>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, name, onBlur, value } }) => (
          <AutocompleteProvider
            placeholder={placeholder}
            id={id}
            multiple={multiple}
            value={value}
            defaultValue={defaultValue}
            name={name}
            onBlur={onBlur}
            onChange={(_event, value) => {
              return onChange(value ?? [])
            }}
            options={options}
            getOptionLabel={(option) => option?.name}
            isOptionEqualToValue={(option, value) =>
              option?.name === value?.name
            }
            loading={isLoading}
            endDecorator={
              isLoading ? (
                <CircularProgress
                  size="sm"
                  sx={{ bgcolor: 'background.surface' }}
                />
              ) : null
            }
            sx={() => ({
              paddingX: 0.5,
            })}
          />
        )}
      />
    </FormControl>
  )
}

export default Autocomplete
