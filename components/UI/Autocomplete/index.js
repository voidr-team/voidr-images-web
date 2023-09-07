import { Autocomplete as AutocompleteProvider } from '@mui/joy'
import { Controller } from 'react-hook-form'

function Autocomplete({
  control,
  name,
  options,
  defaultValue,
  multiple,
  placeholder,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, name, onBlur, ref, value } }) => (
        <AutocompleteProvider
          placeholder={placeholder}
          multiple={multiple}
          value={value}
          defaultValue={defaultValue}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          itemRef={ref}
          options={options}
        />
      )}
    />
  )
}

export default Autocomplete
