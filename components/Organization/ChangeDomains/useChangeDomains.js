import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  domains: yup.array().of(
    yup.object().shape({
      domain: yup
        .string()
        .url('Please provide a valid URL')
        .required('Required field'),
    })
  ),
})

export default function useChangeDomains() {
  const formMethods = useForm({
    defaultValues: {
      domains: [{ domain: '' }],
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = formMethods.handleSubmit((data) => console.log(data))

  return { formMethods, onSubmit }
}
