import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  domains: yup.array().of(
    yup.object().shape({
      domain: yup
        .string()
        .required('Required field')
        .test(
          'is-valid-domain-or-asterisk',
          'Please provide a valid URL',
          (value) => value === '*' || yup.string().url().isValidSync(value)
        ),
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
