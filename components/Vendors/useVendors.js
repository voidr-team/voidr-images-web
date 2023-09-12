import { useForm } from 'react-hook-form'

function useVendors() {
  const formMethods = useForm()

  const onSubmit = formMethods.handleSubmit((data) => console.log(data))

  return { formMethods, onSubmit }
}

export default useVendors
