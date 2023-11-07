import { Stack, Typography } from '@mui/joy'
import { FormProvider, useFieldArray } from 'react-hook-form'
import useChangeDomains from './useChangeDomains'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Input from '@/components/Form/Input'
import { Trash } from 'lucide-react'
import Button from '@/components/UI/Button'

export default function ChangeDomains({ domains }) {
  const { formMethods, onSubmit, isLoading } = useChangeDomains({ domains })
  const { fields, append, remove } = useFieldArray({
    control: formMethods.control,
    name: 'domains',
  })
  const [parentRef] = useAutoAnimate()

  return (
    <div>
      <Typography level="h3">Domains</Typography>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit}>
          <div ref={parentRef}>
            {fields.map((field, index) => (
              <Stack
                direction="row"
                alignItems="center"
                maxWidth="400px"
                gap={2}
                marginTop={1}
                key={field.id}
              >
                <Stack width="100%" maxWidth="350px">
                  <Input
                    name={`domains.${index}.domain`}
                    placeholder="https://mywebsite.com"
                  />
                </Stack>

                {index === 0 ? null : (
                  <Trash
                    style={{ cursor: 'pointer' }}
                    onClick={() => remove(index)}
                  />
                )}
              </Stack>
            ))}
          </div>

          <Typography
            onClick={() => append({ domain: '' })}
            sx={{ cursor: 'pointer' }}
            marginTop={1}
            textColor="helper.400"
            fontSize={16}
          >
            + Add domain
          </Typography>

          <Stack marginY={3}>
            <Button type="submit" inverted isLoading={isLoading}>
              Save changes
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  )
}
