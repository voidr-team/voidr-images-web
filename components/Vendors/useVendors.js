import { useForm } from 'react-hook-form'

function useVendors() {
  const formMethods = useForm()

  return { formMethods }
}

export default useVendors
